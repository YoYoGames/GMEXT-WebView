
if (locked) return;

// Opens a url (note: protocol - http|https - is required)
webview_open_url("https://www.gamemaker.io");
webview_set_borderless(true);

// Create a button on the view and place it at the top right
var btn = webview_button_create(48, WebViewButtonGravity.Top | WebViewButtonGravity.Right);

// We are using the image in the included files
webview_button_set_asset(btn, WebViewButtonAssetType.FilePath, working_directory + "img_close.png");

// We are setting a callback to provide a more indepth version of what can be done
webview_button_set_callback(btn, function() {
    
    switch (click_count) {
        case 0:
            // The button click callback will trigger a eval command that will do a custom post using gm_post
            webview_eval_js($"gm_post('The next click will close the window!')");
            click_count += 1;          
            break;
        default: 
            // Closes the webview (this will also clear all buttons) 
            webview_close();
            click_count = 0;
            break;
    }
});
