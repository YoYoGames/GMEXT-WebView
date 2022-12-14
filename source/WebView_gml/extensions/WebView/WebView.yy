{
  "resourceType": "GMExtension",
  "resourceVersion": "1.2",
  "name": "WebView",
  "optionsFile": "options.json",
  "options": [],
  "exportToGame": true,
  "supportedTargets": -1,
  "extensionVersion": "1.0.0",
  "packageId": "",
  "productId": "",
  "author": "",
  "date": "2020-06-11T00:41:25",
  "license": "",
  "description": "",
  "helpfile": "",
  "iosProps": true,
  "tvosProps": false,
  "androidProps": true,
  "installdir": "",
  "files": [
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","filename":"WebView.ext","origname":"","init":"","final":"","kind":4,"uncompress":false,"functions":[
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"WebView_Create","externalName":"WebView_Create","kind":4,"help":"WebView_Create(url)","hidden":false,"returnType":1,"argCount":0,"args":[
            1,
          ],"documentation":"",},
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"WebView_Destroy","externalName":"WebView_Destroy","kind":4,"help":"WebView_Destroy()","hidden":false,"returnType":1,"argCount":0,"args":[],"documentation":"",},
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"WebView_Button_Add","externalName":"WebView_Button_Add","kind":4,"help":"WebView_Button_Add(button_icon)","hidden":false,"returnType":1,"argCount":0,"args":[
            1,
          ],"documentation":"",},
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"WebView_Button_Destroy","externalName":"WebView_Button_Destroy","kind":4,"help":"WebView_Button_Destroy()","hidden":false,"returnType":1,"argCount":0,"args":[],"documentation":"",},
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"WebView_Button_SetAlpha","externalName":"WebView_Button_SetAlpha","kind":4,"help":"WebView_Button_SetAlpha(alpha)","hidden":false,"returnType":1,"argCount":0,"args":[
            2,
          ],"documentation":"",},
      ],"constants":[],"ProxyFiles":[],"copyToTargets":-1,"usesRunnerInterface":false,"order":[
        {"name":"WebView_Create","path":"extensions/WebView/WebView.yy",},
        {"name":"WebView_Destroy","path":"extensions/WebView/WebView.yy",},
        {"name":"WebView_Button_Add","path":"extensions/WebView/WebView.yy",},
        {"name":"WebView_Button_Destroy","path":"extensions/WebView/WebView.yy",},
        {"name":"WebView_Button_SetAlpha","path":"extensions/WebView/WebView.yy",},
      ],},
  ],
  "classname": "WebViewGM",
  "tvosclassname": "",
  "tvosdelegatename": "",
  "iosdelegatename": "",
  "androidclassname": "WebViewGM",
  "sourcedir": "",
  "androidsourcedir": "",
  "macsourcedir": "",
  "maccompilerflags": "",
  "tvosmaccompilerflags": "",
  "maclinkerflags": "",
  "tvosmaclinkerflags": "",
  "iosplistinject": "",
  "tvosplistinject": "",
  "androidinject": "",
  "androidmanifestinject": "",
  "androidactivityinject": "",
  "gradleinject": "",
  "androidcodeinjection": "",
  "hasConvertedCodeInjection": true,
  "ioscodeinjection": "",
  "tvoscodeinjection": "",
  "iosSystemFrameworkEntries": [
    {"resourceType":"GMExtensionFrameworkEntry","resourceVersion":"1.0","name":"WebKit.framework","weakReference":false,"embed":0,},
  ],
  "tvosSystemFrameworkEntries": [],
  "iosThirdPartyFrameworkEntries": [],
  "tvosThirdPartyFrameworkEntries": [],
  "IncludedResources": [],
  "androidPermissions": [],
  "copyToTargets": 562949953421324,
  "iosCocoaPods": "",
  "tvosCocoaPods": "",
  "iosCocoaPodDependencies": "",
  "tvosCocoaPodDependencies": "",
  "parent": {
    "name": "Extensions",
    "path": "folders/WebView/Extensions.yy",
  },
}