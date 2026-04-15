<!--section:docs-->

> [!NOTE]
> This is a community-driven successor to the [Pico CSS framework](https://github.com/picocss/pico) with a few simple goals:
>
> 1. **Maintain** `pico` minimally until its creator returns.
> 2. **Focus** exclusively on the `pico.css` version, similar to how [simple.css](https://github.com/kevquirk/simple.css) is maintained (for Sass version check [@Yohn's fork](https://github.com/Yohn/PicoCSS) instead).
> 3. **Keep** all net new features in https://github.com/anyblades/blades, shipped as `pico.blades.css` — a drop-in compatible replacement for `pico.css`.

<!--section:summary-->

<h1>
  <a href="https://blades.ninja/css/pico/" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-light.svg">
      <img alt="Pico CSS" src="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-light.svg" width="auto" height="60" style="max-height: 4rem">
    </picture>
  </a>
</h1>

<big>Minimal CSS Framework for Semantic HTML</big>

A minimalist and lightweight starter kit that prioritizes semantic syntax, making every HTML element responsive and elegant by default.

Write HTML, Add Pico CSS, and Voilà!

![](https://img.shields.io/github/v/release/anyblades/pico?label=&color=darkslategray&style=for-the-badge&include_prereleases)
[![](https://img.shields.io/badge/Code-gainsboro?logo=github&logoColor=black&style=for-the-badge)](https://github.com/anyblades/pico)
[![](https://img.shields.io/github/stars/anyblades/pico?label=Star&labelColor=gainsboro&color=silver&style=for-the-badge)](https://github.com/anyblades/pico)

<!--section:gh-only-->

## [Docs & demos ↗](https://blades.ninja/css/pico/)

- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Limitations](#limitations)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

<!--section:docs-->

## What’s new in v2.2? <!--{#fixes}-->

Now including all features from [*Bl*ades CSS](https://github.com/anyblades/blades), shipped as `pico.blades.css` — a drop-in compatible replacement for `pico.css`.

Also, it includes [various fixes](https://codepen.io/anydigital/full/YPGOXWV) for [original @picocss/pico issues](https://codepen.io/anydigital/full/WbGgbJd):

- 🛠️ [#731: Allow to selectively unreduce motion like `[aria-busy="true"]` does](https://github.com/picocss/pico/issues/731)
- 🐞 [#670: Slow website picocss.com | box-shadow performance issues](https://github.com/picocss/pico/issues/670) & [PR#718](https://github.com/picocss/pico/pull/718)
- 🛠️ [#721: Possible duplicate of text-align property inside the same element selector](https://github.com/picocss/pico/issues/721)
- 🐞 [#701: Nav dropdowns display error with Firefox](https://github.com/picocss/pico/issues/701)
- 🐞 [#727: Fix dropdown summary ul offscreen | in Safari](https://github.com/picocss/pico/pull/727)

<!--{.unlist}-->

## A Superpowered HTML Reset

With just the right amount of everything, Pico is great starting point for a clean and lightweight design system.

- Class-light and Semantic
- Great Styles with Just CSS
- Responsive Everything
- Light or Dark Mode
- Easy Customization
- Optimized Performance

---

## Quick start

There are 4 ways to get started with Pico+*Bl*ades CSS:

### Install manually

[Download Pico+*Bl*ades](https://github.com/anyblades/pico/archive/refs/heads/main.zip) and link `css/pico.blades.css` in the `<head>` of your website.

```html
<link rel="stylesheet" href="css/pico.blades.min.css" />
```

### Usage from CDN

Alternatively, you can use [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@anyblades/pico) to link `pico.blades.css`:

<!--prettier-ignore-->
```html
<link rel="stylesheet" href="
  https://cdn.jsdelivr.net/npm/@anyblades/pico@^2.2.0-alpha/css/pico.blades.min.css
"/>
```

### Install with NPM

```sh
npm install @anyblades/pico@alpha @anyblades/blades@alpha
```

Then, import Pico+*Bl*ades into your CSS:

```css
@import "@anyblades/pico";
@import "@anyblades/blades";
```

### Starter HTML template <!-- from index.html -->

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="css/pico.blades.min.css" />
    <title>Hello world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello world!</h1>
    </main>
  </body>
</html>
```

---

## Documentation

- **Getting started**
  - [Quick start <i>🥷</i>](https://blades.ninja/css/pico/#quick-start)
  - [Conditional styling](https://picocss.com/docs/conditional)
  - [RTL](https://picocss.com/docs/rtl)
- **Customization**
  - [CSS Variables](https://picocss.com/docs/css-variables)
- **Layout**
  - [Container](https://picocss.com/docs/container)
  - [Landmarks & section](https://picocss.com/docs/landmarks-section)
  - [Grid](https://picocss.com/docs/grid)
  - [Overflow auto](https://picocss.com/docs/overflow-auto)
  - [Breakout layout <i>🥷</i>](https://blades.ninja/css/breakout/)
  - [Auto-columns <i>🥷</i>](https://blades.ninja/css/#auto-columns)
  - [... and more <i>🥷</i>](https://blades.ninja/css/#layout)
- **Content**
  - [Typography](https://picocss.com/docs/typography)
  - [Link](https://picocss.com/docs/link)
  - [Link icon <i>🥷</i>](https://blades.ninja/css/link-icon/)
  - [Button](https://picocss.com/docs/button)
  - [Table](https://picocss.com/docs/table)
  - [Responsive table <i>🥷</i>](https://blades.ninja/css/responsive-table/)
  - [Heading anchors <i>🥷</i>](https://blades.ninja/css/#heading-anchors)
  - [List markers <i>🥷</i>](https://blades.ninja/css/#list-markers)
  - [... and more <i>🥷</i>](https://blades.ninja/css/#content)
- **Forms**
  - [Overview](https://picocss.com/docs/forms)
  - [Input](https://picocss.com/docs/forms/input)
  - [Textarea](https://picocss.com/docs/forms/textarea)
  - [Select](https://picocss.com/docs/forms/select)
  - [Checkboxes](https://picocss.com/docs/forms/checkboxes)
  - [Radios](https://picocss.com/docs/forms/radios)
  - [Switch](https://picocss.com/docs/forms/switch)
  - [Range](https://picocss.com/docs/forms/range)
  - [Float labels <i>🥷</i>](https://blades.ninja/css/float-label/)
- **Components**
  - [Accordion](https://picocss.com/docs/accordion)
  - [Card](https://picocss.com/docs/card)
  - [Dropdown](https://picocss.com/docs/dropdown)
  - [Group](https://picocss.com/docs/group)
  - [Loading](https://picocss.com/docs/loading)
  - [Modal](https://picocss.com/docs/modal)
  - [Nav](https://picocss.com/docs/nav)
  - [Progress](https://picocss.com/docs/progress)
  - [Tooltip](https://picocss.com/docs/tooltip)
- **[Utilities <i>🥷</i>](https://blades.ninja/css/#utilities)**
  - [Auto-dark <i>🥷</i>](https://blades.ninja/css/#auto-dark)
  - [... and more <i>🥷</i>](https://blades.ninja/css/#utilities)

<!--{.unlist .columns}-->

---

## Limitations

Pico CSS can be used without custom CSS for quick or small projects. However, it’s designed as a starting point, like a “reset CSS on steroids”. As Pico does not integrate many helpers or utility `.classes`, it requires CSS knowledge to build large projects.

[Read more](https://picocss.com/docs/usage-scenarios)

## Browser support

Pico CSS is designed and tested for the latest stable Chrome, Firefox, Edge, and Safari releases. It does not support any version of IE, including IE 11.

## Contributing

- https://github.com/anyblades/pico for the original Pico CSS framework fixes.
- https://github.com/anyblades/blades for net new features and ideas.

## Copyright and license

Licensed under the [MIT License](https://github.com/anyblades/pico/blob/master/LICENSE.md).
