#include "GMWebViewManager.h"
#include <sstream>
#include <fstream>
#include <filesystem>
#include <thread>
#include <iomanip>
#include <iostream>

#ifdef _MSC_VER
#pragma warning(push)
#pragma warning(disable : 4005) // macro redefinition
#endif

#include <webview/webview.h>

#ifdef _MSC_VER
#pragma warning(pop)
#endif

extern std::shared_ptr<webview::webview> w_;

extern const char kInjectJS[];
extern const char kYTPageName[];

std::string _buildYoutubeUrl(const std::string& id);
void _writeYoutubeIframeApiPage(const std::filesystem::path& folder);