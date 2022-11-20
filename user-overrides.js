// Fork of Someone's Arkenfox User Override V3.1 //

// MY OVERRIDES //
user_pref("_user.js.parrot", "overrides section syntax error");
user_pref("browser.newtabpage.enabled", true); // 0104: set NEWTAB page
user_pref("browser.search.update", false); // 9000: disable browser search engine updates
user_pref("javascript.use_us_english_locale", true); // 13019: set United States English
user_pref("keyword.enabled", true); // 0801: enable location bar using search
user_pref("widget.use-xdg-desktop-portal.file-picker", 1); // force Firefox to use KDE filepicker

//  ENABLE SEARCH ENGINE SUGGESTIONS //
user_pref("browser.search.suggest.enabled", false); // 0804: disable live search suggestions
user_pref("browser.urlbar.suggest.searches", false); // 0804: disable live search suggestions

// CHNAGE TO FIX VIDEO STREAMING ON SOME SITES //
user_pref("network.http.referer.XOriginPolicy", 0); // 1601: control when to send a cross-origin referer
user_pref("network.http.referer.XOriginTrimmingPolicy", 0); // 1602: control the amount of cross-origin information to send [FF52+]

// ENABLE ALL DRM CONTENT //
user_pref("media.eme.enabled", true); // 2030 [enable autoplay of HTML5 media (FF63+)]

// CONTEXT ENABLE DEVELOPER TOOLS IN BROWSER //
user_pref("devtools.chrome.enabled", true); // 2608: reset remote debugging to enabled
user_pref("devtools.debugger.remote-enabled", false); // 2608: disable remote debugging
user_pref("devtools.theme", "dark"); // 2608: make devtools dark

// DISABLE FORM AUTOFILL //
user_pref("extensions.formautofill.addresses.enabled", false); // 0811: disable Form Autofill [FF55+]
user_pref("extensions.formautofill.available", "off"); // 0811: [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // 0811: disable Form Autofill [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // 0811: disable Form Autofill [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // 0811: disable Form Autofill [FF55+]

// ETP (ENHANCED TRACKING PROTECTION) //
user_pref("browser.contentblocking.category", "strict"); // 2701: use ETP Strict mode
user_pref("network.cookie.lifetimePolicy", 2); // 2801: delete cookies and site data on exit
user_pref("privacy.firstparty.isolate", false); // 6008: default false arkenfox v96
user_pref("network.cookie.cookieBehavior", 5); // 2701: inactive v96 [set at runtime by category=strict]
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // 2701: default but still forcing
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // 2701: default but still forcing
user_pref("privacy.firstparty.isolate", false); // 6008: enforce no First Party Isolation [FF51+]
user_pref("webgl.disabled", true); // 4520: disable WebGL (Web Graphics Library)
user_pref("extensions.pocket.enabled", false); // 9000: disable Pocket Account [FF46+]
user_pref("privacy.resistFingerprinting.letterboxing", true); // 4504: enable RFP letterboxing [FF67+]
user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "1366x768"); // 4504: enable RFP letterboxing [FF67+]
user_pref("privacy.resistFingerprinting",true); // 4501: enable privacy.resistFingerprinting [FF41+]
user_pref("fission.autostart", true); // enable fission for site isolation
user_pref("gfx.font_rendering.graphite.enabled", false); // 5503: disable graphite

// SHUTDOWN & SANITIZING //
user_pref("privacy.clearOnShutdown.cookies", false); // 2811: These items do not use exceptions, it is all or nothing (1681701)
user_pref("privacy.clearOnShutdown.offlineApps", false); // 2811: These items do not use exceptions, it is all or nothing (1681701)

// DISABLE ION AND BASELINE JIT TO HARDEN AGAINST JS EXPLOITS //
user_pref("javascript.options.ion", false); // 5505
user_pref("javascript.options.baselinejit", false); // 5505
user_pref("javascript.options.jit_trustedprincipals", true); // 5505: [FF75+]

// BREAKAGE ENTRIES //
/* Compositor and acceleration related entries
 This might break if you are not updating drivers regularly (please do though)
 or on some specific hardware. In such case, reset these in about:config after removing
*/

// VIDEO ENCODING //
user_pref("gfx.webrender.all", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

/* Can cause issues, you can enable it if you want */
//user_pref("gfx.webrender.compositor.force-enabled", true);

// [WINDOWS RELATED ENTRIES]
user_pref("gfx.direct2d.disabled", false); // Enables Direct2D

// Ensure other Pocket stuff is disabled just to be sure
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // 0105: disable some Activity Stream items
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false); // 0105: disable some Activity Stream items

// Force system font DPI
user_pref("layout.css.dpi", 0);

// Make firefox urlbar consistent with Windows behaviour
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("layout.word_select.stop_at_punctuation", true);

// Make scrolling snappier
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 100);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 100);
user_pref("general.smoothScroll.other.durationMinMS", 100);
user_pref("general.smoothScroll.pages.durationMaxMS", 100);
user_pref("general.smoothScroll.pages.durationMinMS", 100);
user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);


// Window Managers
user_pref("ui.context_menus.after_mouseup", true);  // Enforce right click context menu appearing after right click release, not click. This is a problem on certain WMs where this gets set to false.

// Bookmarks
user_pref("browser.bookmarks.editDialog.showForNewBookmarks", false); // Disable the edit menu for adding bookmarks

// Enable userchrome css stuff. Uncomment to enable !!!
// user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// user_pref("svg.context-properties.content.enabled", true);
// user_pref("layers.acceleration.force-enabled", true);
// user_pref("layout.css.backdrop-filter.enabled", true);

// Extras
user_pref("browser.compactmode.show", true); // Restore Compact Mode - 89 Above
user_pref("_user.js.parrot", "overrides section successful");
