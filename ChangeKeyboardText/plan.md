# Project Plan: ChangeKeyboardText Chrome Extension

## 1. Programming Flow
This section outlines the recommended order for implementing the features, step by step:

1. **Project Setup**
   - Create the Chrome extension manifest (manifest.json)
   - Set up the basic extension structure (HTML, CSS, JS)

2. **UI Design**
   - Create a popup with two textboxes: one for input, one for output
   - Add labels and minimal styling for clarity

3. **Language Detection**
   - Implement a function to detect if the input is in English or Hebrew (using ASCII/Unicode ranges)

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

---

## 2. Must-Have Features
These are the essential features required for the first working version of the extension:

- Textbox for user input (supports both English and Hebrew)
- Automatic language detection (based on character set: ASCII for English, Unicode for Hebrew)
- Second textbox displays the converted text in the other language
- Mapping logic for English ↔ Hebrew keyboard layouts
- Real-time conversion as the user types
- Simple, user-friendly interface

---

*This plan divides the project into a logical programming flow and highlights the must-have features for the MVP (Minimum Viable Product).* 