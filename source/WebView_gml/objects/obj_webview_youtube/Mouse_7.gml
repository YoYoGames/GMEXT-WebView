
if (locked) return;

// Opens an youtube video (we use a slug)
webview_load_youtube("2DzcRUP9dLg");
webview_set_borderless(true);

var btn = webview_button_create(20, WebViewButtonGravity.CenterHorizontal | WebViewButtonGravity.Top);


// To avoid extra logic we set the button to auto close (upon click)
webview_button_set_auto_close(btn, true);
