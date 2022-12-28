# 💚 Ny i Lund - Student guide

A website for new students at Lund University in order for them to get a head start in understanding the city, the university and the student life.

## 💻 Technologies

- [Node.js 16](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting started
> Make sure you have Node.js 16 and Yarn installed before continuing.

1. Clone the repository

```bash
git clone git@github.com:esek/nyilund.git
```

2. Install dependencies

```bash
yarn
```

3. Start the development server

```bash
yarn dev
```

## 🌏 Localization

Internationalization is done using a custom built solution.

The [`<MainLayout />`](./src/layouts/main-layout.astro) component has a `locale` prop that is used to determine which language to use.
Then, all subcomponents that require translations also have a `locale` prop.
This can then be used in conjuction with the [`getTranslations`](./src/locales/index.ts) function to retrieve a tuple of the translation function as well as the routes for the current locale.

### Translations
The translations are placed in the [`locales`](./src/locales) folder, and exported from the [`index.ts`](./src/locales/index.ts) file.

## ❓ FAQ

The FAQ section is built using markdown files in the [`content/faq`](./src/content/faq) folder. These are placed in their relative language folder, and are then imported in the [`<FAQ />`](./src/components/faq.astro) component. This is done in order to be able to use more advanced markdown features, such as links and headings.
