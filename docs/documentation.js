
// FUNCTIONS

/**
 * @function webview_open_url
 * @desc This function opens the given URL in a WebView.
 * 
 * [[Note: This function will destroy all buttons currently on the WebView if a URL is already open.]]
 * 
 * @param {String} [url] The URL to open
 * 
 * @example
 * ```gml
 * webview_open_url("https://manual.gamemaker.io");
 * ```
 * This code opens a URL in the WebView window.
 * @function_end
 */

/**
 * @function webview_hide
 * @desc This function hides the WebView window.
 * 
 * @example
 * ```gml
 * webview_hide();
 * ```
 * This code hides the WebView window.
 * @function_end
 */

/**
 * @function webview_show
 * @desc This function shows the WebView window, setting it to visible.
 * 
 * [[Note: This function requests the WebView to be made visible. ${function.webview_is_visible} will not immediately return `true` after calling this function.]]
 * 
 * @example
 * ```gml
 * webview_show();
 * ```
 * This code brings up the WebView window.
 * @function_end
 */

/**
 * @function webview_close
 * @desc This function closes the WebView window.
 * 
 * @example
 * ```gml
 * webview_close();
 * ```
 * This code closes the WebView.
 * @function_end
 */

/**
 * @function webview_load_html
 * @desc This function loads custom HTML in the WebView.
 * 
 * @param {String} [html] The HTML to load
 * 
 * @example
 * ```gml
 * var _html = @"
 * <html>
 *   <head>
 *     <title>Page Title</title>
 *   </head>
 *   <body>
 *   <h1>Information</h1>
 *     <p>This is information about the game.</p>
 *   </body>
 * </html>";
 * webview_load_html(_html);
 * ```
 * This code loads the HTML in the WebView.
 * @function_end
 */

/**
 * @function webview_load_local
 * @desc This function loads a page from a local file in the WebView.
 * @param {String} [path] The path to the local file
 * 
 * @example
 * ```gml
 * webview_load_local("instructions.htm");
 * ```
 * This code loads a local page.
 * @function_end
 */

/**
 * @function webview_load_blank
 * @desc This function loads a blank page.
 * 
 * @example
 * ```gml
 * webview_load_blank();
 * ```
 * This code loads a blank page.
 * @function_end
 */

/**
 * @function webview_load_youtube
 * @desc This function loads a YouTube video in the WebView.
 * @param {String} [uid] The ID of the video
 * @function_end
 */

/**
 * @function webview_load_no_internet
 * @desc This function loads a "no internet" page.
 * 
 * @example
 * ```gml
 * webview_load_no_internet();
 * ```
 * This code loads a "no internet" page.
 * @function_end
 */

/**
 * @function webview_set_start_mode
 * @desc This function sets the start mode for the WebView.
 * 
 * @param {Constant.WebViewStartMode} mode The mode to use
 * 
 * @example
 * ```gml
 * webview_set_start_mode(WebViewStartMode.Visible);
 * ```
 * This code sets the WebView to start visible.
 * @function_end
 */

/**
 * @function webview_set_borderless
 * @desc This function sets whether the WebView window should have a border or not. The function should be called after opening or loading a page, calls before that will have no effect.
 * 
 * [[Note: Borderless functionality only works on desktop targets. On mobile the WebView is always displayed borderless and fullscreen.]]
 * 
 * @param {Bool} on Whether to display borderless or not
 * @example
 * ```gml
 * webview_open_url("https://www.google.com");
 * webview_set_borderless(true);
 * ```
 * This code opens a URL and then sets the WebView window to display without the window border.
 * @function_end
 */

/**
 * @function webview_get_url
 * @desc This function gets the WebView's URL.
 * 
 * @returns {String}
 * 
 * @example
 * ```gml
 * var _url = webview_get_url();
 * show_debug_message(_url);
 * ```
 * This code gets the WebView URL and outputs it in a debug message.
 * @function_end
 */

/**
 * @function webview_get_title
 * @desc This function gets the title of the page loaded in the WebView.
 * 
 * @returns {String}
 * 
 * @example
 * ```gml
 * var _title = webview_get_title();
 * show_debug_message(_title);
 * ```
 * This code gets the current page title and outputs it in a debug message.
 * @function_end
 */

/**
 * @function webview_is_loading
 * @desc This function returns if the WebView is loading.
 * @returns {Bool}
 * 
 * @example
 * ```gml
 * /// Draw GUI Event
 * var _loading = webview_is_loading();
 * draw_text(5, 5, $"Loading: {_loading}");
 * ```
 * This code draws a text in the Draw GUI event to indicate if the WebView is loading or not.
 * @function_end
 */

/**
 * @function webview_is_running
 * @desc This function returns if the WebView is running.
 * @returns {Bool}
 * 
 * @example
 * ```gml
 * /// Draw GUI Event
 * var _running = webview_is_running();
 * draw_text(5, 5, $"Running: {_running}");
 * ```
 * This code draws a text in the Draw GUI event to indicate if the WebView is running or not.
 * @function_end
 */

/**
 * @function webview_is_visible
 * @desc This function returns if the WebView is visible.
 * @returns {Bool}
 * 
 * @example
 * ```gml
 * var _visible = webview_is_visible();
 * ```
 * This code gets the visibility of the WebView.
 * @function_end
 */

/**
 * @function webview_get_body
 * @desc This function gets the body HTML contents, i.e. the inner HTML, of the WebView.
 * 
 * The body contents will be valid after the page has finished loading and will be updated after that to account for dynamic changes to the page. Subsequent calls to this function will reflect this.
 * 
 * [[Note: The contents are returned as a Base64 encoded string if the page was loaded using ${function.webview_load_html}.]]
 * 
 * @returns {String}
 * 
 * @example
 * ```gml
 * var _body_html = webview_get_body();
 * ```
 * This code gets the current contents of the body of the WebView.
 * @function_end
 */

/**
 * @function webview_get_params
 * @desc This function gets the query string part of the WebView's URL, for example `"field1=value1&field2=value2"`.
 * @returns {String}
 * 
 * @example
 * ```gml
 * var _query = webview_get_params();
 * show_debug_message($"Parameters: {_query}");
 * ```
 * This code gets the query string and outputs it in a debug message.
 * @function_end
 */

/**
 * @function webview_allow_swipe_refresh
 * @desc This function sets whether to allow swipe refresh of the page in the WebView.
 * 
 * [[Note: This functionality is not supported on the Desktop targets.]]
 * 
 * @param {Bool} allow Whether to allow swipe refresh or not
 * 
 * @example
 * ```gml
 * webview_allow_swipe_refresh(true);
 * ```
 * This code sets the WebView to allow a swipe refresh of the page.
 * @function_end
 */

/**
 * @function webview_eval_js
 * @desc This function evaluates the JavaScript code passed in the parameter.
 * 
 * [[Note: You can use the `gm_post()` function to post custom data that will be returned in the callback.]]
 * [[Warning: Functions starting with `__` are used internally and should not be used.]]
 * [[Warning: The WebView extension doesn't perform any security checks on the code that you pass it.]]
 * 
 * @param {String} [js] The string containing the JavaScript code to evaluate
 * 
 * @example
 * ```gml
 * var _js = "alert('Hello World from GameMaker!');";
 * webview_eval_js(_js);
 * 
 * webview_eval_js("gm_post('Hello World from GameMaker!')");
 * ```
 * This code calls the function to show a message in a JavaScript alert and also posts the same message using `gm_post()`.
 * @function_end
 */

/**
 * @function webview_set_js_callback
 * @desc This function sets the JavaScript callback function.
 * @param {Function} [cb] The callback function to use, or `undefined` to unset
 * 
 * @event callback
 * @desc This callback is triggered when the page title changes.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnTitleChange`
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered when the page body changes.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnBodyChange`
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered when the page URL changes.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnUrlChange`
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered when a button was pressed.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnButtonPress`
 * @member {Real} payload The button handle
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered when the page starts loading.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnPageLoadStart`
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered when the page finishes loading.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnPageLoadEnd`
 * @event_end
 * 
 * @event callback
 * @desc This callback is triggered after a custom post.
 * @member {Constant.WebViewJavaScriptEvent} event_type The constant `WebViewJavaScriptEvent.OnCustomPost`
 * @member {String} payload A JSON-formatted string containing an array with the parameters passed to `gm_post()` (see ${function.webview_eval_js})
 * @event_end
 * 
 * @example
 * ```gml
 * webview_set_js_callback(function(_event_type, _payload) {
 *     if (_event_type == WebViewJavaScriptEvent.OnCustomPost) {
 *         show_debug_message("Post Parameters Received:");
 *         var _params = json_parse(_payload);
 *         array_foreach(_params, show_debug_message);
 *     } else {
 *         show_debug_message("JavaScript Callback!");
 *     }
 * });
 * ```
 * This code sets a JavaScript callback function that outputs a debug message containing the parameters passed in case of a custom post event, or a short debug message for any other event.
 * @function_end
 */

/**
 * @function webview_button_create
 * @desc This function creates a button on the WebView. Buttons need to be created after opening a window.
 * 
 * [[Note: Buttons will not work when you navigate to pages that contain pre-injected iframes.]]
 * [[Note: Sprites cannot be passed as an asset directly. You can save a sprite using ${function.sprite_save} and pass the path to the created file with a type of `WebViewButtonAssetType.FilePath` or pass the image as Base64 data (see the second example on the ${function.buffer_base64_encode} page) with a type of `WebViewButtonAssetType.Base64Data`. To load from the save area, the path needs to be prefixed with ${var.game_save_id}.]]
 * 
 * @param {Real} size_dp The size of the button in dp
 * @param {Real} gravity A bitmask of gravity constants (${constant.WebViewButtonGravity})
 * @param {Constant.WebViewButtonAssetType} [asset_type] The type of asset referred to in the `asset` parameter
 * @param {String} [asset] The path to the image asset (in case of file path) or its contents (in case of Base64 data or raw HTML)
 * @returns {Real}
 * 
 * @example
 * ```gml
 * button1 = webview_button_create(48, WebViewButtonGravity.Top|WebViewButtonGravity.Left);
 * button2 = webview_button_create(48, WebViewButtonGravity.Bottom|WebViewButtonGravity.Right, WebViewButtonAssetType.FilePath, "my_custom_button.png");
 * button3 = webview_button_create(48, WebViewButtonGravity.Bottom|WebViewButtonGravity.Left, WebViewButtonAssetType.RawData, "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeD0iMTAiIHk9IjEwIiByeD0iMjAiIHJ5PSIyMCIgZmlsbD0iYmx1ZSIgLz48L3N2Zz4=");
 * ```
 * This code creates a few buttons on the WebView, each using a different asset type for the button.
 * @function_end
 */

/**
 * @function webview_button_destroy
 * @desc This function destroys the given button.
 * @param {Real} handle The button handle
 * 
 * @example
 * ```gml
 * webview_button_destroy(button1);
 * ```
 * This code destroys a previously created button.
 * @function_end
 */

/**
 * @function webview_button_destroy_all
 * @desc This function destroys all buttons currently on the WebView.
 * 
 * @example
 * ```gml
 * webview_button_destroy_all();
 * ```
 * This code destroys all previously created buttons.
 * @function_end
 */

/**
 * @function webview_button_set_alpha
 * @desc This function sets the alpha value of the given button.
 * @param {Real} handle The button handle
 * @param {Real} alpha The alpha value (a value from 0 (fully transparent) to 1 (fully opaque))
 * 
 * @example
 * ```gml
 * webview_button_set_alpha(button1, 0.5);
 * ```
 * This code sets a button's alpha to 0.5.
 * @function_end
 */

/**
 * @function webview_button_set_auto_close
 * @desc This function sets whether the given button closes the WebView window.
 * @param {Real} handle The button handle
 * @param {Bool} flag Whether the button closes the WebView window or not
 * 
 * @example
 * ```gml
 * webview_button_set_auto_close(button2, true);
 * ```
 * This code sets a button to auto close the WebView window.
 * @function_end
 */

/**
 * @function webview_button_set_margins
 * @desc This function sets the margins for the given button.
 * 
 * [[Note: Margins can be different for each button.]]
 * 
 * @param {Real} handle The button handle
 * @param {Real} left The left margin
 * @param {Real} top The top margin
 * @param {Real} right The right margin
 * @param {Real} bottom The bottom margin
 * 
 * @example
 * ```gml
 * webview_button_set_margins(button1, 48, 12, 48, 12);
 * ```
 * This code sets a button's margins to 48 units horizontally and 12 units vertically.
 * @function_end
 */

/**
 * @function webview_button_set_size
 * @desc This function sets the size of the given button.
 * @param {Real} handle The button handle
 * @param {Real} size_dp The button's new size in dp
 * 
 * @example
 * ```gml
 * webview_button_set_size(button1, 100);
 * ```
 * This code sets the button's size to 100.
 * @function_end
 */

/**
 * @function webview_button_set_gravity
 * @desc This function sets the gravity for the given button.
 * @param {Real} handle The button handle
 * @param {Real} gravity A bitwise OR of the constants to set (${constant.WebViewButtonGravity})
 * 
 * @example
 * ```gml
 * webview_button_set_gravity(button2, WebViewButtonGravity.Top|WebViewButtonGravity.Right);
 * ```
 * 
 * @function_end
 */

/**
 * @function webview_button_set_position
 * @desc This function sets the position for the given button.
 * @param {Real} handle The button handle
 * @param {Real} x_dp The x position in dp
 * @param {Real} y_dp The y position in dp
 * 
 * @example
 * ```gml
 * webview_button_set_position(button1, 200, 200);
 * ```
 * This code sets a button's position to (200, 200).
 * @function_end
 */

/**
 * @function webview_button_set_visible
 * @desc This function sets whether the given button is visible or not.
 * @param {Real} handle The button handle
 * @param {Bool} visible Whether the button should be visible or not
 * 
 * @example
 * ```gml
 * webview_button_set_visible(button1, false);
 * ```
 * This code sets a button invisible.
 * @function_end
 */

/**
 * @function webview_button_set_asset
 * @desc This function sets the image asset to be used for the given button.
 * 
 * [[Note: Sprites cannot be passed as an asset directly. You can save a sprite using ${function.sprite_save} and pass the path to the created file with a type of `WebViewButtonAssetType.FilePath` or pass the image as Base64 data (see the second example on the ${function.buffer_base64_encode} page) with a type of `WebViewButtonAssetType.Base64Data`. To load from the save area, the path needs to be prefixed with ${var.game_save_id}.]]
 * 
 * @param {Real} handle The button handle
 * @param {Constant.WebViewButtonAssetType} asset_type The type of asset referred to in the `asset` parameter
 * @param {String} [asset] The path to the image asset (in case of file path) or its contents (in case of Base64 data or raw HTML)
 * 
 * @example
 * ```gml
 * webview_button_set_asset(button2, WebViewButtonAssetType.FilePath, "my_custom_button.png");
 * ```
 * This code sets the asset for a button to an image stored in the given filepath.
 * @function_end
 */

/**
 * @function webview_button_set_callback
 * @desc This function sets the callback function to trigger for the button referred to by the given handle.
 * @param {Real} handle The button handle
 * @param {Function} [callback] The function to call for this button on callback
 * 
 * @example
 * ```gml
 * webview_button_set_callback(button3, func);
 * ```
 * This code sets the GML callback function to be called when the button is clicked.
 * @function_end
 */

// CONSTANTS

/**
 * @const WebViewStartMode
 * @desc This enumeration contains the modes in which the WebView can be started.
 * @member Hidden The WebView is hidden.
 * @member Visible The WebView is visible.
 * @const_end
 */

/**
 * @const WebViewJavaScriptEvent
 * @desc This enumeration contains the types of JavaScript callback.
 * @member OnUrlChange The page URL changed.
 * @member OnBodyChange The page body changed.
 * @member OnTitleChange The page title changed.
 * @member OnButtonPress A button was pressed.
 * @member OnPageLoadStart The page has started loading.
 * @member OnPageLoadEnd The page has finished loading.
 * @member OnCustomPost A custom message was posted.
 * @const_end
 */

/**
 * @const WebViewButtonAssetType
 * @desc This enumeration contains the possible asset types for a WebView button.
 * @member DefaultIcon The default icon is used.
 * @member FilePath The button image is taken from a file.
 * @member Base64Data The button image is taken from Base64 data.
 * @member RawData The button image consists of raw data passed as a data URL to the image tag's `src` attribute.
 * @const_end
 */

/**
 * @const WebViewButtonGravity
 * @desc This enumeration holds the possible values for the button gravity. These constants can be joined together using the boolean "or" operator `|`.
 * @member Left Left
 * @member Right Right
 * @member Top Top
 * @member Bottom Bottom
 * @member Start Start
 * @member End End
 * @member CenterHorizontal Center Horizontally
 * @member CenterVertical Center Vertically
 * @member Center Center
 * @const_end
 */

// MODULES

/**
 * @module home
 * @title WebView
 * @desc This extension allows **Android** and **iOS** developers as well as developers of **Windows**, **macOS** and **Linux** to make use of the WebView to display site URLs directly from inside their game.
 * The WebView extension can also be used to perform OAuth2 authentication from within your game.
 * 
 * When specifying a URL to open, you should make sure to always include the protocol part (e.g., `"http://"`, `"https://"`, `"file://"`, etc.).
 * 
 * [[Note: You can only have one WebView window open at a given time.]]
 * 
 * @section Guides
 * @desc These are the guides for the WebView extension:
 * @ref page.setup
 * @section_end
 * 
 * @section_func
 * @desc The following functions are provided to manipulate the WebView:
 * @ref webview_*
 * @section_end
 * 
 * @section_const
 * @desc The following enumerations are provided to configure the WebView:
 * @ref WebView*
 * @section_end
 * 
 * @module_end
 */
