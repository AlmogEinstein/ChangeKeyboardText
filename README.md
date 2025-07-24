# ChangeKeyboardText Chrome Extension

## Overview
This Chrome extension allows users to input text in either English or Hebrew. The extension automatically detects the input language (using ASCII or Unicode detection) and displays the text converted to the other language in a separate textbox. This is useful for users who accidentally type in the wrong keyboard layout or want to quickly switch between English and Hebrew text representations.

## Features
- Textbox for user input (supports both English and Hebrew)
- Automatic language detection (based on character set: ASCII for English, Unicode for Hebrew)
- Second textbox displays the converted text in the other language
- Simple, user-friendly interface

## Planned Implementation Steps
1. **Project Setup**
   - Create the Chrome extension manifest (manifest.json)
   - Set up the basic extension structure (HTML, CSS, JS)

2. **UI Design**
   - Create a popup with two textboxes: one for input, one for output
   - Add labels and minimal styling for clarity

3. **Language Detection**
   - Implement a function to detect if the input is in English or Hebrew
   - Use ASCII range for English, Unicode range for Hebrew

4. **Text Conversion Logic**
   - Map English keyboard layout to Hebrew and vice versa
   - Implement conversion functions for both directions

5. **Event Handling**
   - Listen for input changes in the first textbox
   - Automatically update the second textbox with the converted text

6. **Testing**
   - Test with various English and Hebrew inputs
   - Ensure accurate detection and conversion

7. **Packaging and Publishing**
   - Package the extension for Chrome Web Store
   - Write usage instructions and screenshots

## Example Usage
- User types "akuo" (in English) → Output: "שלום" (in Hebrew)
- User types "שצשזןמע" (in Hebrew) → Output: "amazing" (in English)

## Future Enhancements
- Support for additional languages
- Option to manually select input/output language
- Keyboard shortcut for quick conversion
- Improved UI/UX

---

*This README outlines the plan for building the ChangeKeyboardText Chrome extension. Implementation will follow the steps above.* 