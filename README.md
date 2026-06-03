<!--section:docs-->

> [!NOTE]
> This is a community-driven successor to the [Pico CSS framework](https://github.com/picocss/pico) with a few simple goals:
>
> 1. **Maintain** `pico` minimally until its creator returns.
> 2. **Focus** exclusively on the `pico.css` version, similar to how [simple.css](https://github.com/kevquirk/simple.css) is maintained (for Sass version check [@Yohn's fork](https://github.com/Yohn/PicoCSS) instead).
> 3. **Keep** all net new features in https://github.com/anyblades/blades, shipped as `pico.blades.css` — a drop-in compatible replacement for `pico.css`.

<!--section:docs,summary-->

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

## Table of contents

- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Limitations](#limitations)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

<!--section:docs-->

## What’s new in v2.2? <!--{#fixes}-->

Now including all features from [*Bl*ades CSS](https://github.com/anyblades/blades), shipped as `pico.blades.css` — a drop-in compatible replacement for `pico.css`.

Also, it includes [various fixes](https://codepen.io/anydigital/full/YPGOXWV) for [original @picocss/pico issues](https://codepen.io/anydigital/full/WbGgbJd): <!--Z-A-->

- [#738 🐞 Submit button margin affecting siblings within .grid](https://github.com/picocss/pico/issues/738)
- [#734 🐞 RTL breadcrumbs add weird backslashes](https://github.com/picocss/pico/issues/734)
- [#733 🐞 Fix for datetime input width within groups within grids on medium breakpoint](https://github.com/picocss/pico/issues/733)
- [#731 🛠️ Allow to selectively unreduce motion like `[aria-busy="true"]` does](https://github.com/picocss/pico/issues/731)
- [#727 🐞 Fix dropdown summary ul offscreen](https://github.com/picocss/pico/pull/727) (Safari)
- [#721 🛠️ Possible duplicate of text-align property inside the same element selector](https://github.com/picocss/pico/issues/721)
- [#701 🐞 Nav dropdowns display error with Firefox](https://github.com/picocss/pico/issues/701)
- [#670 🐞 Slow website picocss.com](https://github.com/picocss/pico/issues/670) + [#718](https://github.com/picocss/pico/pull/718) (`box-shadow` performance issues)

## A Superpowered HTML Reset

With just the right amount of everything, Pico is great starting point for a clean and lightweight design system.

- Class-light and Semantic
- Great Styles with Just CSS
- Responsive Everything
- Light or Dark Mode
- Easy Customization
- Optimized Performance

---

## [Quick start](https://blades.ninja/css/pico/#quick-start)

<!--section:docs2-->

---

## Documentation

<!-- ToC as is from https://blades.ninja/#docs -->
<ul class="columns">
  
  <li>
    <strong><a href="/">Get started</a></strong>
    <ul><li><a href="https://blades.ninja/css/">Quick start</a></li>
<li><a href="https://blades.ninja/css/color-schemes/">Color schemes</a></li>
<li><a href="https://blades.ninja/css/variables/">CSS variables</a></li>
<li><a href="https://blades.ninja/css/standalone/">Standalone version <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/pico/">Pico fork <img src="https://img.shields.io/github/v/release/anyblades/pico?label=&amp;color=white"> <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/frameworks/">Frameworks</a></li></ul>
  </li>
  
  <li>
    <strong><a href="/css/layout/">Layout</a></strong>
    <ul><li><a href="https://blades.ninja/css/container/">Container</a></li>
<li><a href="https://blades.ninja/css/breakout/">Breakout container <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/landmarks-section/">Landmarks &amp; section</a></li>
<li><a href="https://blades.ninja/css/grid/">Grid</a></li>
<li><a href="https://blades.ninja/css/columns/">Text columns <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/overflow-auto/">Overflow auto</a></li></ul>
  </li>
  
  <li>
    <strong><a href="/css/content/">Content</a></strong>
    <ul><li><a href="https://blades.ninja/css/typography/">Typography</a></li>
<li><a href="https://blades.ninja/css/heading/">Heading helpers <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/link/">Link</a></li>
<li><a href="https://blades.ninja/css/link-icon/">Link icon <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/button/">Button</a></li>
<li><a href="https://blades.ninja/css/table/">Table <mark>UPD</mark></a></li>
<li><a href="https://blades.ninja/css/responsive-table/">Responsive table <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/list/">List helpers <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/code/">Code formatting <mark>NEW</mark></a></li></ul>
  </li>
  
  <li>
    <strong><a href="/css/forms/">Forms</a></strong>
    <ul><li><a href="https://blades.ninja/css/forms/">Overview</a></li>
<li><a href="https://blades.ninja/css/input/">Input</a></li>
<li><a href="https://blades.ninja/css/textarea/">Textarea</a></li>
<li><a href="https://blades.ninja/css/select/">Select</a></li>
<li><a href="https://blades.ninja/css/checkboxes/">Checkboxes</a></li>
<li><a href="https://blades.ninja/css/radios/">Radios</a></li>
<li><a href="https://blades.ninja/css/switch/">Switch</a></li>
<li><a href="https://blades.ninja/css/range/">Range</a></li>
<li><a href="https://blades.ninja/css/float-label/">Float labels <mark>NEW</mark></a></li></ul>
  </li>
  
  <li>
    <strong><a href="/css/components/">Components</a></strong>
    <ul><li><a href="https://blades.ninja/css/accordion/">Accordion</a></li>
<li><a href="https://blades.ninja/css/card/">Card</a></li>
<li><a href="https://blades.ninja/css/dropdown/">Dropdown</a></li>
<li><a href="https://blades.ninja/css/group/">Group</a></li>
<li><a href="https://blades.ninja/css/loading/">Loading</a></li>
<li><a href="https://blades.ninja/css/modal/">Modal</a></li>
<li><a href="https://blades.ninja/css/navigation/">Navigation</a></li>
<li><a href="https://blades.ninja/css/progress/">Progress</a></li>
<li><a href="https://blades.ninja/css/tooltip/">Tooltip</a></li>
<li><a href="https://blades.ninja/css/jump/">Jump to... <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/css/utils/">Utilities <mark>NEW</mark></a></li></ul>
  </li>
  
  <li>
    <strong><a href="/html/">Templates <mark>NEW</mark></a></strong>
    <ul><li><a href="https://blades.ninja/html/">Overview</a></li>
<li><a href="https://blades.ninja/html/starter/">HTML starter <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/html/links/">Links <mark>NEW</mark></a></li>
<li><a href="https://blades.ninja/html/sitemap/">Sitemap <mark>NEW</mark></a></li></ul>
  </li>
  
</ul>

---

## Featured by

- https://trendshift.io/repositories/29875

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
