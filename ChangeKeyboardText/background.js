// Background script for ChangeKeyboardText extension
chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
    // This will open the extension popup
    chrome.action.openPopup();
  }
});