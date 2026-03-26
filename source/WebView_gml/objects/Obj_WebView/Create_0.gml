
event_inherited();

// Cached variables
body = undefined;
params = undefined;

//this function sets a callback to be the listener of the webpage
webview_set_js_callback(function(_event_type, _payload) {
	
    // print the message for debug purposes
    show_debug_message($"Payload: {_event_type} :: {_payload}");

    switch (_event_type) {
        
        // This is an custom event triggered by a call to 'gm_post' see button press event
        case WebViewJavaScriptEvent.OnCustomPost:
            // Arguments come through as an json formatted array
            var _args = json_parse(_payload);
            show_debug_message(_args);
            break;
            
        case WebViewJavaScriptEvent.OnButtonPress:
            show_debug_message($"Button with handle '{_payload}' was pressed");
            break;
        
        case WebViewJavaScriptEvent.OnBodyChange:
            body = webview_get_body();
            show_debug_message(body);
            break;
        
        case WebViewJavaScriptEvent.OnUrlChange:
            params = webview_get_params();
            show_debug_message(params);
            break;
                
                
    }
});