// Enable use of userChrome.css.
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Open links in current tab.
pref("browser.link.open_newwindow", 1);
pref("browser.link.open_newwindow.restriction", 1);
// Disable warning on closing multiple tabs.
pref("browser.tabs.warnOnClose", false);
// Disable the privacy notice page on first start.
pref("datareporting.policy.firstRunURL", "");
// Disable tips and informational messages.
pref("browser.startup.couldRestoreSession.count", 2);
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);
// Disable telemetry and data sharing.
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.reportingpolicy.firstRun", false);
pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);
pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "9000000000000");
// Disable the Pocket extension.
pref("extensions.pocket.enabled", false);
