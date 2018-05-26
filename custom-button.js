(function () {
  const KEYCODE = {
    SPACE: 32
  };

  const template = document.createElement('template');

  template.innerHtml(`
    <style>
      :host {
        display: inline-block;
        width: 24px;
        height: 24px;
      }
    </style>
  `);

  class CustomButton extends HTMLElement {
    static get observedAttributes() {
      return [];
    }

    constructor() {
      super();

      this.attachShadow( { mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this._setAttributeIfNotSet('role','checkbox');
      this._setAttributeIfNotSet('tabindex', 0);

      this._upgradeProperty('checked');
      this._upgradeProperty('disabled');

      this.addEventListener('keyup', this._onKeyUp);
      this.addEventListener('click', this._onClick);
    }

    set checked(value) {
      const isChecked = Boolean(value);
      if(isChecked) {
        this.setAttribute('checked', value);
      } else {
        this.removeAttribute('checked');
      }
    }

    get checked() {
      return this.hasAttribute('checked');
    }

    set disabled(value) {
      const isDisabled = Boolean(value);
      if(isDisabled) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }



    _upgradeProperty(prop) {
      if(this.hasOwnProperty(prop)) {
        const value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }

    _setAttributeIfNotSet(attribute, value) {
      if(!this.hasAttribute(attribute)) {
        this.setAttribute(attribute, value);
      }
    }
  }
})
