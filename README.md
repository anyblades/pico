<!--section:intro-->

> [!NOTE]
> This is a community-driven successor to the [Pico CSS framework](https://github.com/picocss/pico) with a few simple goals:
>
> 1. **Maintain** `pico` minimally until its creator returns.
> 2. **Focus** exclusively on the `pico.css` version, similar to how [simple.css](https://github.com/kevquirk/simple.css) is maintained (for Sass version check [@Yohn's fork](https://github.com/Yohn/PicoCSS) instead).
> 3. **Keep** all non-original additions in [blades.css](https://github.com/anyblades/blades), shipped as `pico.blades.css` — a drop-in compatible replacement for `pico.css`.
>
> [Read more](https://github.com/picocss/pico/issues/640#issuecomment-4186674269)

---

### Fixes in `pico.css`

List of [@anyblades/pico fixes](https://codepen.io/anydigital/full/YPGOXWV) for [@picocss/pico issues](https://codepen.io/anydigital/full/WbGgbJd):

- 🐞 [#670: Slow website picocss.com | box-shadow performance issues](https://github.com/picocss/pico/issues/670) & [PR#718](https://github.com/picocss/pico/pull/718)
- 🛠️ [#721: Possible duplicate of text-align property inside the same element selector](https://github.com/picocss/pico/issues/721)
- 🐞 [#701: Nav dropdowns display error with Firefox](https://github.com/picocss/pico/issues/701)
- 🐞 [#727: Fix dropdown summary ul offscreen | in Safari](https://github.com/picocss/pico/pull/727)

<!--{.unlist}-->

### Additions in `pico.blades.css`

List of net new additions (on top of original `pico.css` and fixes above):

<!--section:gh-only-->

https://github.com/anyblades/blades#documentation

<!--section:docs-->

---

<p>
  <a href="https://blades.ninja/css/pico/" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-light.svg">
      <img alt="Pico CSS" src="https://raw.githubusercontent.com/anyblades/pico/HEAD/.github/logo-light.svg" width="auto" height="60" style="max-height: 4rem">
    </picture>
  </a>
</p>

[![Github release](https://img.shields.io/github/v/release/anyblades/pico?color=0172ad&logo=github&logoColor=white)](https://github.com/anyblades/pico/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-%230172ad)](https://github.com/anyblades/pico/blob/master/LICENSE.md)
[![GitHub Repo stars](https://img.shields.io/github/stars/anyblades/pico?label=Star)](https://github.com/anyblades/pico)

## Minimal CSS Framework for Semantic HTML

A minimalist and lightweight starter kit that prioritizes semantic syntax, making every HTML element responsive and elegant by default.

Write HTML, Add Pico CSS, and Voilà!

## What’s new in v2?

Pico v2.0 features better accessibility, easier <ins>maintenance with modern CSS</ins> <del>customization with SASS, a complete color palette, a new group component, and 20 precompiled color themes totaling over 100 combinations</del> accessible via CDN.

[Read more](https://picocss.com/docs/v2)

## A Superpowered HTML Reset

With just the right amount of everything, Pico is great starting point for a clean and lightweight design system.

- Class-light and Semantic
- Great Styles with Just CSS
- Responsive Everything
- Light or Dark Mode
- Easy Customization
- Optimized Performance

## Table of contents

- [Quick start](#quick-start)
- <del>[Class-less version](#class-less-version)</del>
- [Limitations](#limitations)
- [Documentation](#documentation)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Quick start

There are 4 ways to get started with pico.css:

### Install manually

[Download Pico](https://github.com/anyblades/pico/archive/refs/heads/main.zip) and link `/css/pico.min.css` in the `<head>` of your website.

```html
<link rel="stylesheet" href="css/pico.min.css" />

<!-- or Pico+Blades together:
<link rel="stylesheet" href="css/pico.blades.min.css" />
-->
```

### Usage from CDN

Alternatively, you can use [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@anyblades/pico) to link pico.css:

<!--prettier-ignore-->
```html
<link rel="stylesheet" href="
  https://cdn.jsdelivr.net/npm/@anyblades/pico@^2.2.0-alpha/css/pico.min.css
"/>

<!-- or Pico+Blades together:
<link rel="stylesheet" href="
  https://cdn.jsdelivr.net/npm/@anyblades/pico@^2.2.0-alpha/css/pico.blades.min.css
"/>
-->
```

### Install with NPM

```shell
npm install @anyblades/pico@alpha
```

Then, import Pico into your <ins>CSS</ins> <del>SCSS file with [@use](https://sass-lang.com/documentation/at-rules/use)</del>:

```css
@import "@anyblades/pico";

/* or Pico+Blades together:
@import "@anyblades/pico.blades";
*/
```

### <del>Install with Composer</del>

### Starter HTML template

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <link rel="stylesheet" href="css/pico.min.css">
    <!-- or Pico+Blades together:
    <link rel="stylesheet" href="css/pico.blades.min.css">
    -->
    <title>Hello world!</title>
  </head>
  <body>
    <main class="container">
      <h1>Hello world!</h1>
    </main>
  </body>
</html>
```

## <del>Class-less version</del>

## Limitations

Pico CSS can be used without custom CSS for quick or small projects. However, it’s designed as a starting point, like a “reset CSS on steroids”. As Pico does not integrate many helpers or utility `.classes`, it requires CSS knowledge to build large projects.

[Read more](https://picocss.com/docs/usage-scenarios)

## Documentation

**Getting started**

- [Quick start](https://picocss.com/docs)
- <del>[Version picker](https://picocss.com/docs/version-picker)</del>
- <del>[Color schemes](https://picocss.com/docs/color-schemes)</del>
- <del>[Class-less version](https://picocss.com/docs/classless)</del>
- [Conditional styling](https://picocss.com/docs/conditional)
- [RTL](https://picocss.com/docs/rtl)

**Customization**

- [CSS Variables](https://picocss.com/docs/css-variables)
- <del>[Sass](https://picocss.com/docs/sass)</del>
- <del>[Colors](https://picocss.com/docs/colors)</del>

**Layout**

- [Container](https://picocss.com/docs/container)
- [Landmarks & section](https://picocss.com/docs/landmarks-section)
- [Grid](https://picocss.com/docs/grid)
- [Overflow auto](https://picocss.com/docs/overflow-auto)
- [Breakout elements `🥷`](https://blades.ninja/css/breakout/)
- [Auto-columns `🥷`](https://blades.ninja/css/#auto-columns)
- [... and more `🥷`](https://blades.ninja/css/#layout)

**Content**

- [Typography](https://picocss.com/docs/typography)
- [Link](https://picocss.com/docs/link)
- [Link icon `🥷`](https://blades.ninja/css/link-icon/)
- [Button](https://picocss.com/docs/button)
- [Table](https://picocss.com/docs/table)
- [Responsive table `🥷`](https://blades.ninja/css/responsive-table/)
- [Heading anchors `🥷`](https://blades.ninja/css/#heading-anchors)
- [List markers `🥷`](https://blades.ninja/css/#list-markers)
- [... and more `🥷`](https://blades.ninja/css/#content)

**Forms**

- [Overview](https://picocss.com/docs/forms)
- [Input](https://picocss.com/docs/forms/input)
- [Textarea](https://picocss.com/docs/forms/textarea)
- [Select](https://picocss.com/docs/forms/select)
- [Checkboxes](https://picocss.com/docs/forms/checkboxes)
- [Radios](https://picocss.com/docs/forms/radios)
- [Switch](https://picocss.com/docs/forms/switch)
- [Range](https://picocss.com/docs/forms/range)
- [Float labels `🥷`](https://blades.ninja/css/float-label/)

**Components**

- [Accordion](https://picocss.com/docs/accordion)
- [Card](https://picocss.com/docs/card)
- [Dropdown](https://picocss.com/docs/dropdown)
- [Group](https://picocss.com/docs/group)
- [Loading](https://picocss.com/docs/loading)
- [Modal](https://picocss.com/docs/modal)
- [Nav](https://picocss.com/docs/nav)
- [Progress](https://picocss.com/docs/progress)
- [Tooltip](https://picocss.com/docs/tooltip)

**[Utilities `🥷`](https://blades.ninja/css/#utilities)**

**About**

- [What’s new in v2?](https://picocss.com/docs/v2)
- [Mission](https://picocss.com/docs/mission)
- [Usage scenarios](https://picocss.com/docs/usage-scenarios)
- [Brand](https://picocss.com/docs/brand)
- [Built With](https://picocss.com/docs/built-with)

## Browser Support

Pico CSS is designed and tested for the latest stable Chrome, Firefox, Edge, and Safari releases. It does not support any version of IE, including IE 11.

## Contributing

If you are interested in contributing to Pico CSS, please read our [contributing guidelines](https://github.com/picocss/pico/blob/master/.github/CONTRIBUTING.md).

## Copyright and license

Licensed under the [MIT License](https://github.com/anyblades/pico/blob/master/LICENSE.md).
