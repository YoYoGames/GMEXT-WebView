
// FUNCTIONS

/**
 * @func WebView_Create
 * @desc Creates a WebView with assigned url.
 * 
 * @param {string} url The URL that the web view will open
 * 
 * @event social
 * @member {string} type The string `"WebView"`
 * @member {string} event The string `"onCloseWindow"`
 * @event_end
 * 
 * @example
 * ```gml
 * WebView_Create("https://www.yoyogames.com/")
 * ```
 * The code sample above will create a new webview (with the specified url). This view can be destroyed at any time using the function ${function.WebView_Destroy} triggering a callback that can be called inside an {event.social}.
 * 
 * ```gml
 * if(async_load[?"type"] == "WebView") {
 *     switch(async_load[?"event"])
 *     {
 *         case "onCloseWindow":
 *             show_debug_message("[WebView] This webview is was closed!");
 *             break;
 *     }
 * }
 * ```
 * The code above matches the response against the correct event **type** and logs it to the console.
 * @func_end
 */

/**
 * @func WebView_Destroy
 * @desc Destroys a previously created WebView.
 * 
 * [[NOTE: If there is no created WebView nothing will happen.]]
 * 
 * @example
 * ```gml
 * WebView_Create();
 * 
 * // Later in the code
 * 
 * WebView_Button_Destroy();
 * WebView_Destroy();
 * ```
 * The code above provides a sample of a WebView being created (using ${function.WebView_Create}, there's a full sample on that function's reference) and later in the code being destroyed.
 * @func_end
 */

/**
 * @func WebView_Button_Add
 * @desc Attaches a button to the WebView.
 * 
 * [[NOTE: If this function is called before the WebView is created, the called is ignored.]]
 * 
 * @param {string} path The path to the image to be used as button.
 * 
 * @event social
 * @member {string} type The string `"WebView"`
 * @member {string} event The string `"onButtonPressed"`
 * @event_end
 * 
 * @example
 * ```gml
 * WebView_Create("https://www.yoyogames.com/")
 * WebView_Button_Add("WebView/img_close.png")
 * ```
 * The code sample above creates a WebView and attaches a button to it, after this we can catch the click of the button inside an ${event.social}.
 * ```gml
 * if(async_load[?"type"] == "WebView") {
 *     switch(async_load[?"event"])
 *     {
 *         case "onButtonPressed":
 *             WebView_Button_Destroy();
 *             WebView_Destroy();
 *             break;
 *     }
 * }
 * ```
 * 
 * @func_end
 */

/**
 * @func WebView_Button_Destroy
 * @desc Destroys the button from the WebView.
 * 
 * [[WARNING: Always make sure to destroy the button before destroying the WebView.]]
 * 
 * @example
 * ```gml
 * WebView_Create();
 * 
 * // Later in the code
 * 
 * WebView_Button_Destroy();
 * WebView_Destroy();
 * ```
 * The code above provides a sample of a WebView being created (using {function.WebView_Create}, there's a full sample on that function's reference) and later in the code being destroyed (using the function ${function.WebView_Destroy}). Note that the button should always be destroyed before the WebView does.
 * @func_end
 */

/**
 * @func WebView_Button_SetAlpha
 * @desc Sets alpha value of the button attached to the WebView. This should be a value ranging from 0 to 1, where 0 means hidden and 1 means fully visible.
 * 
 * @param {real} alpha Value from 0-1.
 * 
 * @example
 * ```gml
 * WebView_Create("https://www.yoyogames.com/");
 * WebView_Button_Add("WebView/img_close.png");
 * WebView_Button_SetAlpha(0.5);
 * ```
 * The code above will create a WebView attach it a button and make sure that the button is semi-transparent.
 * @func_end
 */


/**
 * @module home
 * @title WebView
 * @desc This extension allows **Android** and **iOS** developers to make use of the WebView to display site URLs directly from inside their game.
 * 
 * 
 * @section_func
 * @desc The following functions are provided to manipulate the WebView:
 * @ref WebView_Create
 * @ref WebView_Destroy
 * @ref WebView_Button_Add
 * @ref WebView_Button_Destroy
 * @ref WebView_Button_SetAlpha
 * @section_end
 * 
 * @module_end
 */
