// Keyboard layout maps (QWERTY <-> Hebrew)
const enToHeMap = {
  "q": "/",
  "w": "'",
  "e": "ק",
  "r": "ר",
  "t": "א",
  "y": "ט",
  "u": "ו",
  "i": "ן",
  "o": "ם",
  "p": "פ",
  "a": "ש",
  "s": "ד",
  "d": "ג",
  "f": "כ",
  "g": "ע",
  "h": "י",
  "j": "ח",
  "k": "ל",
  "l": "ך",
  ";": "ף",
  "z": "ז",
  "x": "ס",
  "c": "ב",
  "v": "ה",
  "b": "נ",
  "n": "מ",
  "m": "צ",
  ",": "ת",
  ".": "ץ",
  "Q": "/",
  "W": "'",
  "E": "ק",
  "R": "ר",
  "T": "א",
  "Y": "ט",
  "U": "ו",
  "I": "ן",
  "O": "ם",
  "P": "פ",
  "A": "ש",
  "S": "ד",
  "D": "ג",
  "F": "כ",
  "G": "ע",
  "H": "י",
  "J": "ח",
  "K": "ל",
  "L": "ך",
  "Z": "ז",
  "X": "ס",
  "C": "ב",
  "V": "ה",
  "B": "נ",
  "N": "מ",
  "M": "צ"
};

// TODO: Fill in the actual mapping for enToHeMap and heToEnMap
const heToEnMap = {
  '/': 'q',
  '\'': 'w',
  'ק': 'e',
  'ר': 'r',
  'א': 't',
  'ט': 'y',
  'ו': 'u',
  'ן': 'i',
  'ם': 'o',
  'פ': 'p',
  'ש': 'a',
  'ד': 's',
  'ג': 'd',
  'כ': 'f',
  'ע': 'g',
  'י': 'h',
  'ח': 'j',
  'ל': 'k',
  'ך': 'l',
  'ף': ';',
  'ז': 'z',
  'ס': 'x',
  'ב': 'c',
  'ה': 'v',
  'נ': 'b',
  'מ': 'n',
  'צ': 'm',
  'ת': ',',
  'ץ': '.'
};


function detectLanguage(text) {
  // If most characters are Hebrew, treat as Hebrew; else English
  let hebrewCount = 0, englishCount = 0;
  for (const char of text) {
    if (char >= '\u0590' && char <= '\u05FF') hebrewCount++;
    else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) englishCount++;
  }
  return hebrewCount > englishCount ? 'he' : 'en';
}

function convertText(text, direction) {
  const map = direction === 'en2he' ? enToHeMap : heToEnMap;
  return text.split('').map(char => map[char] || char).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputText');
  const output = document.getElementById('outputText');
  const colorSelect = document.getElementById('colorSelect');
  const labels = document.querySelectorAll('label');

  // Autofocus on input textarea
  input.focus();

  // Restore color from chrome.storage.local
  function setLabelColor(color) {
    labels.forEach(label => {
      label.style.color = color;
    });
  }

  if (window.chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['fontColor'], (result) => {
      const color = result.fontColor || 'black';
      colorSelect.value = color;
      setLabelColor(color);
    });
  } else {
    // Fallback for non-extension environments
    const color = localStorage.getItem('fontColor') || 'black';
    colorSelect.value = color;
    setLabelColor(color);
  }

  colorSelect.addEventListener('change', () => {
    const color = colorSelect.value;
    setLabelColor(color);
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ fontColor: color });
    } else {
      localStorage.setItem('fontColor', color);
    }
  });

  input.addEventListener('input', () => {
    const value = input.value;
    if (!value) {
      output.value = '';
      return;
    }
    const lang = detectLanguage(value);
    if (lang === 'en') {
      output.value = convertText(value, 'en2he');
    } else {
      output.value = convertText(value, 'he2en');
    }
  });
}); 