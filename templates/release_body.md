## IMPORTANT

- This extension is to be used with **GameMaker 2022.9 and newer**
- Works with **Android**, **iOS**, and **Desktop (Windows, macOS, Linux)**
- Provides a **native WebView overlay** controlled from GML

---

## CHANGES SINCE ${releaseOldVersion}

https://github.com/YoYoGames/GMEXT-WebView/compare/${releaseOldVersion}...${releaseNewVersion}

---

## DESCRIPTION

WebView enables developers to present web content inside their game using a native overlay.

The extension now provides a **fully featured, cross-platform WebView system**, supporting:
- mobile platforms (Android / iOS)
- desktop platforms (Windows / macOS / Linux)

It includes:
- dynamic content loading (URL, HTML, local files)
- JavaScript execution and callbacks
- UI controls (buttons, layout, visibility)
- runtime state queries and interaction hooks

This allows building rich hybrid experiences such as:
- embedded web flows (login, payments, support)
- dynamic content rendering
- in-game browsers and UI overlays

---

## FEATURES

### Content Loading
- Open external URLs
- Load raw HTML strings
- Load local files
- Load YouTube content
- Load blank or fallback (no internet) pages

### WebView Control
- Show / hide / close WebView
- Configure start mode (hidden / visible)
- Borderless display option
- Enable / disable swipe refresh

### State & Data Access
- Get current URL
- Get page title
- Get page body content
- Get URL parameters
- Check loading state
- Check visibility and running state

### JavaScript Integration
- Execute JavaScript from GML
- Receive JavaScript callbacks
- Handle custom events from the page

### Native Button System
- Create and destroy WebView buttons
- Set position, size, margins, and gravity
- Control visibility and alpha
- Assign custom assets (icon, file, base64, raw)
- Attach callbacks for button interaction
- Optional auto-close behavior

### Event System
Supports events such as:
- URL changes
- Page load start / end
- Title updates
- Body updates
- Button presses
- Custom JavaScript posts

---

## USAGE NOTES

- WebView runs as a **native overlay**, not inside the GameMaker draw pipeline
- Behavior may vary slightly between **mobile and desktop platforms**
- Some features depend on **platform WebView capabilities**
- JavaScript interaction requires proper page setup
- Local file loading may require correct file paths and permissions

---

## SETUP REQUIREMENTS

- Ensure your project targets a supported platform:
  - Android
  - iOS
  - Windows / macOS / Linux
- Internet permissions may be required depending on usage
- For local content, ensure files are packaged correctly
- Follow platform-specific WebView guidelines where applicable

---

## DOCUMENTATION

The full API documentation is included in the extension asset (included files), along with usage examples and implementation details.

---