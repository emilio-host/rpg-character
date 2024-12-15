/**
 * Copyright 2024 emilio-host
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import "wired-elements";

/**
 * rpg-character
 * 
 * @demo index.html
 * @element rpg-character
 */
export class RpgCharacter extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "rpg-character";
  }

  constructor() {
    super();
    this.title = "";
    this.fire = false;
    this.walking = false;
    this.walkingTimer = null;
    this.face = 1;
    this.faceItem = 1;
    this.hairStyle = 1;
    this.pantsStyle = 1;
    this.shirtStyle = 1;
    this.skinTone = 1;
    this.hatColor = 1;
  }

  // Lit reactive properties
  static get properties() {
    return {
      fire: { type: Boolean },
      walking: { type: Boolean },
      face: { type: Number },
      faceItem: { type: Number },
      hairStyle: { type: Number },
      pantsStyle: { type: Number },
      shirtStyle: { type: Number },
      skinTone: { type: Number },
      hatColor: { type: Number },

      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--rpg-character-label-font-size, var(--ddd-font-size-s));
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h3><span>${this.t.title}:</span> ${this.title}</h3>
        <div class="character">
          ${this.fire ? html`
            <div class="fire"></div>` : ""}
          ${this.walking ? html`
            <div class="walking"></div>` : ""}
          <div
            class="face"
            style="background: url('./assets/face-${this.face}.png')"
          ></div>
          <div
            class="face-item"
            style="background: url('./assets/face-item-${this.faceItem}.png')"
          ></div>
          <div
            class="hair-style"
            style="background: url('./assets/hair-style-${this.hair}.png')"
          ></div>
          <div
            class="pants-style"
            style="background: url('./assets/pants-style-${this.pants}.png')"
          ></div>
          <div
            class="shirt-style"
            style="background: url('./assets/shirt-style-${this.shirt}.png')"
          ></div>
          <div
            class="skin-tone"
            style="background: url('./assets/skin-tone-${this.skin}.png')"
          ></div>
          <div
            class="hat-color"
            style="background: url('./assets/hat-color-${this.hatColor}.png')"
          ></div>
        </div>
        <slot></slot>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(RpgCharacter.tag, RpgCharacter);