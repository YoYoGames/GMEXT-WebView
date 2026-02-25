#import "objc/runtime.h"
#import "GMWebView_ios.h"
#import "GMWebViewManager/GMWebViewManager.h"

using namespace webviewcpp;

@implementation GMWebView

+ (void)load {
    // 1) snapshot methods defined *directly* on the subclass
    unsigned subCount = 0;
    Method *subList = class_copyMethodList(self, &subCount);

    // build a set of SELs the subclass already owns
    CFMutableSetRef owned = CFSetCreateMutable(kCFAllocatorDefault, 0, NULL);
    for (unsigned i = 0; i < subCount; ++i) {
        SEL sel = method_getName(subList[i]);
        CFSetAddValue(owned, sel);
    }

    // 2) walk the superclass’s instance methods
    unsigned supCount = 0;
    Method *supList = class_copyMethodList([GMWebViewInternal class], &supCount);

    for (unsigned i = 0; i < supCount; ++i) {
        SEL sel = method_getName(supList[i]);

        // (optional) only copy your extension selectors
        const char *name = sel_getName(sel);
        if (!name || strncmp(name, "__EXT_NATIVE__", 13) != 0) continue;

        // only add if NOT already defined on subclass
        if (!CFSetContainsValue(owned, sel)) {
            IMP imp = method_getImplementation(supList[i]);
            const char *types = method_getTypeEncoding(supList[i]);
            if (class_addMethod(self, sel, imp, types)) {
                // remember we added it (avoid re-adding if +load ever runs twice)
                CFSetAddValue(owned, sel);
            }
        }
    }

    // 3) cleanup
    if (subList) free(subList);
    if (supList) free(supList);
    if (owned) CFRelease(owned);
}

- (void)webview_open_url:(std::optional<std::string_view>)url
{
    GMWebViewManager::instance().open(std::string(url.value_or("")));
}

- (void)webview_hide
{
    GMWebViewManager::instance().hide();
}

- (void)webview_show
{
    GMWebViewManager::instance().show();
}

- (void)webview_close 
{
    GMWebViewManager::instance().close();
}

- (void)webview_load_html:(std::optional<std::string_view>)html
{
    GMWebViewManager::instance().loadLocal(std::string(html.value_or("")), true);
}

- (void)webview_load_local:(std::optional<std::string_view>)path
{
    GMWebViewManager::instance().loadLocal(std::string(path.value_or("")), false);
}

- (void)webview_load_blank
{
    GMWebViewManager::instance().loadBlank();
}

- (void)webview_load_youtube:(std::optional<std::string_view>)uid
{
    GMWebViewManager::instance().loadYouTube(std::string(uid.value_or("")));
}

- (void)webview_load_no_internet 
{
    GMWebViewManager::instance().loadNoInternet();
}

- (void)webview_set_start_mode:(gm_enums::WebViewStartMode)mode
{
    GMWebViewManager::instance().setStartMode((WebViewStartMode) mode);
}

- (void)webview_set_borderless:(bool)on
{
    GMWebViewManager::instance().setBorderless(on);
}

- (std::string)webview_get_url
{
    return GMWebViewManager::instance().url();
}

- (std::string)webview_get_title
{
    return GMWebViewManager::instance().title();
}

- (bool)webview_is_loading
{
    return GMWebViewManager::instance().isLoading();
}

- (bool)webview_is_running
{
    return GMWebViewManager::instance().isRunning();
}

- (bool)webview_is_visible
{
    return GMWebViewManager::instance().isVisible();
}

- (std::string)webview_get_body
{
    return GMWebViewManager::instance().body();
}

- (std::string)webview_get_params
{
    return GMWebViewManager::instance().params();
}

- (void)webview_allow_swipe_refresh:(bool)allow
{
    GMWebViewManager::instance().allowSwipeRefresh(allow);
}

- (void)webview_eval_js:(std::optional<std::string_view>)js
{
    GMWebViewManager::instance().evalJS(std::string(js.value_or("")));
}

- (void)webview_set_js_callback:(std::optional<gm::wire::GMFunction>)cb
{
    GMWebViewManager::instance().setJSCallback(cb.value_or(nullptr));
}

- (std::int32_t)webview_button_create:(std::int32_t)size_dp gravity:(std::int32_t)gravity asset_type:(std::optional<gm_enums::WebViewButtonAssetType>)asset_type asset:(std::optional<std::string_view>)asset
{
    std::int32_t handle = GMWebViewManager::instance().buttonCreate(
          size_dp,
          gravity,
          (WebViewButtonAssetType)asset_type.value_or(gm_enums::WebViewButtonAssetType::DefaultIcon),
          std::string(asset.value_or(""))
      );
    return handle;
}

- (void)webview_button_destroy:(std::int32_t)handle
{
    GMWebViewManager::instance().buttonDestroy(handle);
}

- (void)webview_button_destroy_all
{
    GMWebViewManager::instance().buttonDestroyAll();
}

- (void)webview_button_set_alpha:(std::int32_t)handle alpha:(double)alpha
{
    GMWebViewManager::instance().buttonSetAlpha(handle, alpha);
}

- (void)webview_button_set_auto_close:(std::int32_t)handle flag:(bool)flag
{
    GMWebViewManager::instance().buttonSetAutoClose(handle, flag);
}

- (void)webview_button_set_margins:(std::int32_t)handle left:(std::int32_t)left top:(std::int32_t)top right:(std::int32_t)right bottom:(std::int32_t)bottom
{
    GMWebViewManager::instance().buttonSetMargins(handle, left, top, right, bottom);
}

- (void)webview_button_set_size:(std::int32_t)handle size_dp:(std::int32_t)size_dp
{
    GMWebViewManager::instance().buttonSetSize(handle, size_dp);
}

- (void)webview_button_set_gravity:(std::int32_t)handle gravity:(std::int32_t)gravity
{
    GMWebViewManager::instance().buttonSetGravity(handle, gravity);
}

- (void)webview_button_set_position:(std::int32_t)handle x_dp:(std::int32_t)x_dp y_dp:(std::int32_t)y_dp
{
    GMWebViewManager::instance().buttonSetPosition(handle, x_dp, y_dp);
}

- (void)webview_button_set_visible:(std::int32_t)handle visible:(bool)visible
{
    if (visible) GMWebViewManager::instance().buttonShow(handle);
    else GMWebViewManager::instance().buttonHide(handle);
}

- (void)webview_button_set_asset:(std::int32_t)handle asset_type:(gm_enums::WebViewButtonAssetType)asset_type asset:(std::optional<std::string_view>)asset
{
    GMWebViewManager::instance().buttonSetAsset(handle, (WebViewButtonAssetType)asset_type, std::string(asset.value_or("")));
}

- (void)webview_button_set_callback:(std::int32_t)handle callback:(std::optional<gm::wire::GMFunction>)callback
{
    if (callback)
        GMWebViewManager::instance().buttonSetCallback(handle, callback.value());
    else
        GMWebViewManager::instance().buttonClearCallback(handle);
}

- (void)webview_shutdown
{
    GMWebViewManager::instance().close();
}

@end

