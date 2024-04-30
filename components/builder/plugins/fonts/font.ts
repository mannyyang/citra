import type { Editor } from 'grapesjs';
import { html, render } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { map } from 'lit-html/directives/map.js';
import { createRef, ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';

const el = document.createElement('div')
let modal: any

export const cmdOpenFonts = 'open-google-fonts'

/**
 * Constants
 */
const LS_FONTS = 'loaded-fonts-list'

/**
 * Module variables
 */
let _fontsList: any[]
let fonts: any[];
let defaults: any[] = [];

/**
 * Options
 */
let fontServer = 'https://www.googleapis.com'

/**
 * Load available fonts only once per session
 * Use local storage
 */
try {
  if (localStorage.getItem(LS_FONTS)) {
    _fontsList = JSON.parse(localStorage.getItem(LS_FONTS) as string)
  }
} catch (e) {
  console.error('Could not get fonts from local storage:', e)
}

/**
 * Promised wait function
 */
async function wait(ms = 0) {
  return new Promise(resolve => setTimeout(() => resolve(null), ms))
}

/**
 * When the dialog is opened
 */
async function loadFonts(editor: Editor) {
  fonts = structuredClone(editor.getModel().get('fonts') || [])
}

/**
 * When the dialog is closed
 */
function saveFonts(editor: Editor, opts: any) {
  const model = editor.getModel()

  // Store the modified fonts
  model.set('fonts', fonts)

  // Update the HTML head with style sheets to load
  updateHead(editor, fonts)

  // Update the "font family" dropdown
  updateUi(editor, fonts, opts)

  // Save website if auto save is on
  model.set('changesCount', editor.getDirtyCount() + 1)
}

/**
 * Load the available fonts from google
 */
async function loadFontList(url: string) {
  if (!_fontsList) {
    _fontsList = (await (await fetch(url)).json())?.items;
  }

  localStorage.setItem(LS_FONTS, JSON.stringify(_fontsList))
  await wait() // let the dialog open
  return _fontsList
}

export const fontsDialogPlugin = (editor: Editor, opts: any) => {
  defaults = (editor.StyleManager.getBuiltIn('font-family') as any).options

  if (opts.server_url) fontServer = opts.server_url

  if (!opts.api_key) throw new Error(editor.I18n.t('grapesjs-fonts.You must provide Google font api key'))
  editor.Commands.add(cmdOpenFonts, {
    /* eslint-disable-next-line */
    run: () => {
      modal = editor.Modal.open({
        title: editor.I18n.t('grapesjs-fonts.Fonts'),
        content: '',
        attributes: { class: 'fonts-dialog' },
      })
        .onceClose(() => {
          editor.stopCommand(cmdOpenFonts) // apparently this is needed to be able to run the command several times
        })
      modal.setContent(el)
      loadFonts(editor)
      displayFonts(editor, opts, [])
      loadFontList(`${fontServer}/webfonts/v1/webfonts?key=${opts.api_key}`)
        .then(fontsList => {
          displayFonts(editor, opts, fontsList)
          const form = el.querySelector('form')
          if (form) {
            form.onsubmit = event => {
              event.preventDefault()
              saveFonts(editor, opts)
              editor.stopCommand(cmdOpenFonts)
            }
            form.querySelector('input')?.focus()
          }
        })
      return modal
    },
    stop: () => {
      modal.close()
    },
  })
  // add fonts to the website on save
  editor.on('storage:start:store', (data: any) => {
    data.fonts = editor.getModel().get('fonts')
  })
  // add fonts to the website on load
  editor.on('storage:end:load', (data: any) => {
    const fonts = data.fonts || []
    editor.getModel().set('fonts', fonts)
    // FIXME: remove this timeout which is a workaround for issues in Silex storage providers
    setTimeout(() => refresh(editor, opts), 1000)
  })
  // update the head and the ui when the frame is loaded
  editor.on('canvas:frame:load', () => refresh(editor, opts))
  // When the page changes, update the dom
  editor.on('page', () => refresh(editor, opts))
}

function match(hay: string, s: string | RegExp) {
  const regExp = new RegExp(s, 'i')
  return hay.search(regExp) !== -1
}

const searchInputRef = createRef()
const fontRef = createRef()

function displayFonts(editor: Editor, config: any, fontsList: any[]) {
  const searchInput = searchInputRef.value
  const activeFonts = fontsList.filter((f: any) => match(f.family, (searchInput as HTMLInputElement)?.value || '')) as any[]
  (searchInput as HTMLInputElement)?.focus()
  function findFont(font: any) {
    return fontsList.find((f: any) => font.name === f.family)
  }
  render(html`
    <form class="silex-form grapesjs-fonts">
      <div class="silex-form__group">
        <div class="silex-bar">
          <input
            style=${styleMap({ width: '100%' })}
            placeholder="${editor.I18n.t('grapesjs-fonts.Search')}"
            type="text"
            ${ref(searchInputRef)}
            @keydown=${() => {
      //(fontRef.value as HTMLSelectElement).selectedIndex = 0
      setTimeout(() => displayFonts(editor, config, fontsList))
    }}/>
          <select
            style=${styleMap({
      width: '150px',
    })}
            ${ref(fontRef)}
          >
            ${map(activeFonts, f => html`
              <option value=${f['family']}>${f['family']}</option>
            `)}
          </select>
          <button class="silex-button"
            ?disabled=${!fontRef.value || activeFonts.length === 0}
            type="button" @click=${() => {
      addFont(
        fonts,
        activeFonts[((fontRef.value as HTMLSelectElement).selectedIndex ?? -1)]
      )
      displayFonts(editor, config, fontsList)
    }}>
            ${editor.I18n.t('grapesjs-fonts.Add font')}
          </button>
        </div>
      </div>
      <hr/>
      <div
        class="silex-form__element">
        <h2>${editor.I18n.t('grapesjs-fonts.Installed fonts')}</h2>
        <ol class="silex-list">
        ${map(fonts, (f: any) => html`
          <li>
            <div class="silex-list__item__header">
              <h4>${f.name}</h4>
            </div>
            <div class="silex-list__item__body">
              <fieldset class="silex-group--simple full-width">
                <legend>CSS rules</legend>
                <input
                  class="full-width"
                  type="text"
                  name="name"
                  .value=${live(f.value)}
                  @change=${(e: any) => {
        updateRules(f, e.target.value)
        displayFonts(editor, config, fontsList)
      }}
                />
              </fieldset>
              <fieldset class="silex-group--simple full-width">
                <legend>Variants</legend>
                ${map(
        // keep only variants which are letters, no numbers
        // FIXME: we need the weights
        findFont(f)?.variants.filter((v: string) => v.replace(/[a-z]/g, '') === ''),
        (v: any) => html`
                  <div>
                    <input
                      id=${f.name + v}
                      type="checkbox"
                      value=${v}
                      ?checked=${f.variants?.includes(v)}
                      @change=${(e: any) => {
            updateVariant(f, v, e.target.checked)
            displayFonts(editor, config, fontsList)
          }}
                    /><label for=${f.name + v}>${v}</label>
                  </div>
                `)}
              </fieldset>
            </div>
            <div class="silex-list__item__footer">
              <button class="silex-button" type="button" @click=${() => {
        removeFont(fonts, f)
        displayFonts(editor, config, fontsList)
      }}>${editor.I18n.t('grapesjs-fonts.Remove')}</button>
            </div>
          </li>
        `)}
        </ol>
      </div>
      <footer>
        <input class="silex-button" type="button" @click=${() => editor.stopCommand(cmdOpenFonts)} value="${editor.I18n.t('grapesjs-fonts.Cancel')}">
        <input class="silex-button" type="submit" value="${editor.I18n.t('grapesjs-fonts.Save')}">
      </footer>
    </form>
  `, el)
}

function addFont(fonts: any[], font: any) {
  const name = font.family
  const value = `"${font.family}", ${font.category}`
  fonts.push({ name, value, variants: [] })
}

function removeFont(fonts: any[], font: any) {
  const idx = fonts.findIndex(f => f === font)
  fonts.splice(idx, 1)
}

function removeAll(doc: Document, attr: string) {
  const all = doc.head.querySelectorAll(`[${attr}]`)
  Array.from(all)
    .forEach((el: any) => el.remove())
}

const GOOGLE_FONTS_ATTR = 'data-silex-gstatic'
function updateHead(editor: Editor, fonts: any[]) {
  const doc = editor.Canvas.getDocument()
  if (!doc) {
    // This happens while grapesjs is not ready
    return
  }
  removeAll(doc, GOOGLE_FONTS_ATTR)
  const html = getHtml(fonts, GOOGLE_FONTS_ATTR)
  doc.head.insertAdjacentHTML('beforeend', html)
}

function updateUi(editor: Editor, fonts: any[], opts: any) {
  const styleManager = editor.StyleManager
  const fontProperty = styleManager.getProperty('typography', 'font-family')
  if (!fontProperty) {
    // This happens while grapesjs is not ready
    return
  }
  if (opts.preserveDefaultFonts) {
    fonts = defaults.concat(fonts)
  } else if (fonts.length === 0) {
    fonts = defaults
  }
  (fontProperty as any).setOptions(fonts)
}

export function refresh(editor: Editor, opts: any) {
  const fonts = editor.getModel().get('fonts') || []
  updateHead(editor, fonts)
  updateUi(editor, fonts, opts)
}

function updateRules(font: any, value: string) {
  font.value = value
}

function updateVariant(font: any, variant: string, checked: boolean) {
  const has = font.variants?.includes(variant)
  if (has && !checked) font.variants = font.variants.filter((v: any) => v !== variant)
  else if (!has && checked) font.variants.push(variant)
}

export function getHtml(fonts: any[], attr = '') {
  const preconnect = `<link href="${fontServer}" rel="preconnect" ${attr}><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin ${attr}>`
  const links = fonts
    .map(f => {
      const prefix = f.variants.length ? ':' : ''
      const variants = prefix + f.variants.map((v: any) => v.replace(/\d+/g, '')).filter((v: any) => !!v).join(',')
      return `<link href="${fontServer}/css?family=${f.name.replace(/ /g, '+')}${variants}&display=swap" rel="stylesheet" ${attr}>`
    })
    .join('')

  return preconnect + links
}