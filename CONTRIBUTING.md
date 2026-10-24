# How to contribute

Basic HTML/CSS/JS knowledged are required.

## NPM

Make sure you have NodeJS and its package manager NPM.

To install a package, use

```
npm install package-name
```

To start the dev server, use

```
npm run dev
```

This will start a dev server hosted on your own machine. The link will be provided.

## Git

Make sure you have Git installed. It is used for version control.

To clone this repo, use

```
git clone https://github.com/GoobusTheNoobus/GRCS-Website.git
```

To push a change, use

```
git add .
git commit -m <commit-message>
git push -u origin main
```

## Astro

Astro is the JavaScript framework used for this site. Here is a brief explanation of it. If you need more information,
check out the [official documentations](https://docs.astro.build/en/getting-started/).

`src/` the folder that contains all the source code.

`src/pages/` the folder that contains the pages. Each file is one webpage.

`src/layouts/` the folder that contains all the "layouts," which are a bit like templates. They are used as HTML
tags that are the same as their file name. For example `Layout.astro` will let you use `<Layout>`, given that you
have imported it using

```ts
import Layout from "<path/to/Layout.astro>";
```

Whatever HTML content you put inside your `<Layout>` tag will be rendered in the `<slot/>` tag inside `Layout.astro`.
They can also accept arguments using `Astro.props`. I will not go more into detail, since this is just the overview. See
the documentation above if you need.

`src/components` just like Layouts, each file exports a custom tag that is the same name as the file name
(`Navbar.astro` -> `<Navbar>`). They are reusable components. For example, the Navbar should be used in every single
file, so we can put a `<Navbar>` in `Layout.astro`, and every page will use a
`<Layout>` tag, which includes the Navbar in every single page.

`public/` used to store public assets (like favicon and fonts). Fonts are stored in
`public/fonts/`.

## Styling

Use the CSS variables for color (declared in `src/styles/style.css`).
