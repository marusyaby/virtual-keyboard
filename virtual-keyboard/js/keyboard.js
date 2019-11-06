const keys = [
  row1 = [
    { code: 'Backquote', en: '`', shiftEn: '~' },
    { code: 'Digit1', en: '1', shiftEn: '!' },
    { code: 'Digit2', en: '2', shiftEn: '@' },
    { code: 'Digit3', en: '3', shiftEn: '#' },
    { code: 'Digit4', en: '4', shiftEn: '$' },
    { code: 'Digit5', en: '5', shiftEn: '%' },
    { code: 'Digit6', en: '6', shiftEn: '^' },
    { code: 'Digit7', en: '7', shiftEn: '&' },
    { code: 'Digit8', en: '8', shiftEn: '*' },
    { code: 'Digit9', en: '9', shiftEn: '(' },
    { code: 'Digit0', en: '0', shiftEn: ')' },
    { code: 'Minus', en: '-', shiftEn: '_' },
    { code: 'Equal', en: '=', shiftEn: '+' },
    { code: 'Backspace', en: '<' },
  ],

  row2 = [
    { code: 'Tab', en: 'tab' },
    { code: 'KeyQ', en: 'q', shiftEn: 'Q' },
    { code: 'KeyW', en: 'w', shiftEn: 'W' },
    { code: 'KeyE', en: 'e', shiftEn: 'W' },
    { code: 'KeyR', en: 'r', shiftEn: 'E' },
    { code: 'KeyT', en: 't', shiftEn: 'R' },
    { code: 'KeyY', en: 'y', shiftEn: 'T' },
    { code: 'KeyU', en: 'u', shiftEn: 'Y' },
    { code: 'KeyI', en: 'i', shiftEn: 'U' },
    { code: 'KeyO', en: 'o', shiftEn: 'I' },
    { code: 'KeyP', en: 'p', shiftEn: 'O' },
    { code: 'BracketLeft', en: '[', shiftEn: 'P' },
    { code: 'BracketRight', en: ']', shiftEn: '{' },
    { code: 'Delete', en: 'Delete' },
  ],

  row3 = [
    { code: 'CapsLock', en: '^'},
    { code: 'KeyA', en: 'a', shiftEn: 'Q' },
    { code: 'KeyS', en: 's', shiftEn: 'W' },
    { code: 'KeyD', en: 'd', shiftEn: 'W' },
    { code: 'KeyF', en: 'f', shiftEn: 'E' },
    { code: 'KeyG', en: 'g', shiftEn: 'R' },
    { code: 'KeyH', en: 'h', shiftEn: 'T' },
    { code: 'KeyJ', en: 'j', shiftEn: 'Y' },
    { code: 'KeyK', en: 'k', shiftEn: 'U' },
    { code: 'KeyL', en: 'l', shiftEn: 'I' },
    { code: 'Semicolon', en: ';', shiftEn: ':' },
    { code: 'Quote', en: '\'', shiftEn: '\"' },
    { code: 'Backslash', en: '\\', shiftEn: '|' },
    { code: 'Enter', en: 'Enter' },
  ],

  row4 = [
    { code: 'ShiftLeft', en: 'Shift' },
    { code: 'IntlBackslash', en: '\\', shiftEn: '~' },
    { code: 'KeyZ', en: 'z', shiftEn: 'Z' },
    { code: 'KeyX', en: 'x', shiftEn: 'X' },
    { code: 'KeyC', en: 'c', shiftEn: 'C' },
    { code: 'KeyV', en: 'v', shiftEn: 'V' },
    { code: 'KeyB', en: 'b', shiftEn: 'B' },
    { code: 'KeyN', en: 'n', shiftEn: 'N' },
    { code: 'KeyM', en: 'm', shiftEn: 'M' },
    { code: 'Comma', en: ',', shiftEn: '<' },
    { code: 'Period', en: '.', shiftEn: '>' },
    { code: 'Slash', en: '/', shiftEn: '?' },
    { code: 'ShiftRight', en: 'Shift' },
  ],

  row5 = [
    { code: 'ControlLeft', en: 'Ctrl' },
    { code: 'AltLeft', en: 'Alt' },
    { code: 'OSLeft', en: 'Cmd' },
    { code: 'Space', en: 'Space' },
    { code: 'OSRight', en: 'Cmd' },
    { code: 'AltRight', en: 'Alt' },
    { code: 'ControlRight', en: 'Ctrl' },
  ],
];

const Keyboard = {

  init() {
    const container = document.createElement('div');
    const keyboard = document.createElement('div');
    const text = document.createElement('div');
    const keysContainer = document.createElement('div');

    keyboard.classList.add('keyboard');
    keysContainer.classList.add('keyboard__keys');
    text.classList.add('text');

    keysContainer.appendChild(this.createKeys());

    document.body.appendChild(container);
    container.appendChild(text);
    container.appendChild(keyboard);
    keyboard.appendChild(keysContainer);
  },

  createKeys() {
    const createIconHTML = (iconName) => {
      return `<span class="mdi ${iconName}"></span>`;
    };

    const fragment = document.createDocumentFragment();

    keys.forEach(row => {
      const keyRow = document.createElement('div');
      keyRow.classList.add('keyboard__row');

      row.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        keyElement.innerText = key.en;
        keyElement.id = key.code;

        switch (key.code) {
          case 'Backspace':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-backspace');
            break;

          case 'Tab':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-keyboard-tab');
            break;

          case 'Delete':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-backspace-reverse-outline');
            break;

          case 'Tab':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-keyboard-tab');
            break;

          case 'CapsLock':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-caps');
            break;

          case 'ShiftLeft':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-shift');
            break;

          case 'ShiftRight':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-shift');
            break;

          case 'ControlLeft':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-control');
            break;

          case 'AltLeft':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-option');
            break;

          case 'OSLeft':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-command');
            break;

          case 'Space':
            keyElement.classList.add('keyboard__key--extra-wide');
            keyElement.innerHTML = createIconHTML('mdi-keyboard-space');
            break;

          case 'ControlRight':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-control');
            break;

          case 'AltRight':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-option');
            break;

          case 'OSRight':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('mdi-apple-keyboard-command');
            break;

        }

        keyRow.appendChild(keyElement);
      });

      fragment.appendChild(keyRow);
    });

    return fragment;
  },

  showActiveKey(evt) {
    document.getElementById(`${evt.code}`).
      classList.
      add('keyboard__key--active');
  },

  hideActiveKey(evt) {
    document.getElementById(`${evt.code}`).classList.remove('keyboard__key--active');
  },
};

document.addEventListener('keydown', evt => {
  evt.preventDefault();
  Keyboard.showActiveKey(evt);
});

document.addEventListener('keyup', evt => {
  Keyboard.hideActiveKey(evt);
});

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
