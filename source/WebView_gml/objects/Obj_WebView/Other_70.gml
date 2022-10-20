
show_debug_message(json_encode(async_load))

if(async_load[?"type"] == "WebView")
switch(async_load[?"event"])
{
	case "onButtonPressed":
		WebView_Button_Destroy()
		WebView_Destroy()
	break
	
	case "onCloseWindow":
	break
}
