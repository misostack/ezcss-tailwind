# Tailwind CSS

## Development

```bash
yarn serve
```

## Topics

### I.Installation

**Folder structure**

- src
  - styles.css
- public
  - index.html
  - styles.css

**Add tailwindcss package**

```bash
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

**Init tailwind config**

```bash
npx tailwindcss init --full
```

```js
/* Filename : tailwind.config.js */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

**Add tailwind directives**

```css
/* Filename: public/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Tailwind CLI**

```bash
# compile
npx tailwindcss -i ./src/styles.css -o ./public/styles.css
# watch change
npx tailwindcss -o tailwind.css --watch
# production
NODE_ENV=production npx tailwindcss -i ./src/styles.css -o ./public/styles.css --minify
```

**Create new script in your package.json**

```json
  "scripts": {
    "build:css": "tailwindcss -i ./src/styles.css -o ./public/styles.css",
    "watch:css": "tailwindcss -i ./src/styles.css -o ./public/styles.css --watch"
  },
```

**You can add live-server as http server to serve your public folder**

```bash
yarn global add live-server
live-server public # serving "public" folder
```

**Rename public to docs to allow github page can host your docs folder**

### II.Fonts & Colors

- https://tailwindcss.com/docs/text-color
- https://tailwindcss.com/docs/font-size

```html
<p class="text-gray-600 text-lg font-bold uppercase"></p>
```

### III. Margin, Padding, Borders

```html
<p class="p-1 px-1 py-0"></p>
```

### IV. Browser sync

- https://browsersync.io/docs/command-line
