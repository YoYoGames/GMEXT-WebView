/**
 * @function_partial webview_open_url
 * @param {String} [url]
 * @function_end 
 */

/**
 * @function_partial webview_hide
 * @function_end 
 */

/**
 * @function_partial webview_show
 * @function_end 
 */

/**
 * @function_partial webview_close
 * @function_end 
 */

/**
 * @function_partial webview_load_html
 * @param {String} [html]
 * @function_end 
 */

/**
 * @function_partial webview_load_local
 * @param {String} [path]
 * @function_end 
 */

/**
 * @function_partial webview_load_blank
 * @function_end 
 */

/**
 * @function_partial webview_load_youtube
 * @param {String} [uid]
 * @function_end 
 */

/**
 * @function_partial webview_load_no_internet
 * @function_end 
 */

/**
 * @function_partial webview_set_start_mode
 * @param {Constant.WebViewStartMode} mode
 * @function_end 
 */

/**
 * @function_partial webview_set_borderless
 * @param {Bool} on
 * @function_end 
 */

/**
 * @function_partial webview_get_url
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial webview_get_title
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial webview_is_loading
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial webview_is_running
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial webview_is_visible
 * @returns {Bool} 
 * @function_end 
 */

/**
 * @function_partial webview_get_body
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial webview_get_params
 * @returns {String} 
 * @function_end 
 */

/**
 * @function_partial webview_allow_swipe_refresh
 * @param {Bool} allow
 * @function_end 
 */

/**
 * @function_partial webview_eval_js
 * @param {String} [js]
 * @function_end 
 */

/**
 * @function_partial webview_set_js_callback
 * @param {Function} [cb]
 * @function_end 
 */

/**
 * @function_partial webview_button_create
 * @param {Real} size_dp
 * @param {Real} gravity
 * @param {Constant.WebViewButtonAssetType} [asset_type]
 * @param {String} [asset]
 * @returns {Real} 
 * @function_end 
 */

/**
 * @function_partial webview_button_destroy
 * @param {Real} handle
 * @function_end 
 */

/**
 * @function_partial webview_button_destroy_all
 * @function_end 
 */

/**
 * @function_partial webview_button_set_alpha
 * @param {Real} handle
 * @param {Real} alpha
 * @function_end 
 */

/**
 * @function_partial webview_button_set_auto_close
 * @param {Real} handle
 * @param {Bool} flag
 * @function_end 
 */

/**
 * @function_partial webview_button_set_margins
 * @param {Real} handle
 * @param {Real} left
 * @param {Real} top
 * @param {Real} right
 * @param {Real} bottom
 * @function_end 
 */

/**
 * @function_partial webview_button_set_size
 * @param {Real} handle
 * @param {Real} size_dp
 * @function_end 
 */

/**
 * @function_partial webview_button_set_gravity
 * @param {Real} handle
 * @param {Real} gravity
 * @function_end 
 */

/**
 * @function_partial webview_button_set_position
 * @param {Real} handle
 * @param {Real} x_dp
 * @param {Real} y_dp
 * @function_end 
 */

/**
 * @function_partial webview_button_set_visible
 * @param {Real} handle
 * @param {Bool} visible
 * @function_end 
 */

/**
 * @function_partial webview_button_set_asset
 * @param {Real} handle
 * @param {Constant.WebViewButtonAssetType} asset_type
 * @param {String} [asset]
 * @function_end 
 */

/**
 * @function_partial webview_button_set_callback
 * @param {Real} handle
 * @param {Function} [callback]
 * @function_end 
 */

/**
 * @function_partial webview_shutdown
 * @function_end 
 */

/**
 * @const_partial WebViewJavaScriptEvent
 * @member OnUrlChange
 * @member OnBodyChange
 * @member OnTitleChange
 * @member OnButtonPress
 * @member OnPageLoadStart
 * @member OnPageLoadEnd
 * @member OnCustomPost
 * @const_end 
 */

/**
 * @const_partial WebViewStartMode
 * @member Hidden
 * @member Visible
 * @const_end 
 */

/**
 * @const_partial WebViewButtonAssetType
 * @member DefaultIcon
 * @member FilePath
 * @member Base64Data
 * @member RawData
 * @const_end 
 */

/**
 * @const_partial WebViewButtonGravity
 * @member Left
 * @member Right
 * @member Top
 * @member Bottom
 * @member Start
 * @member End
 * @member CenterHorizontal
 * @member CenterVertical
 * @member Center
 * @const_end 
 */

