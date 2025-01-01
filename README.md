# Website

一个民间翻译, 与官方没有任何关系

This is the Geyser website is built using [Docusaurus 3](https://docusaurus.io/).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Project Structure

- [`blog/`](/blog/): Blog markdown files
- [`wiki/`](/wiki/): Wiki markdown files
    - [`api/`](/wiki/api/): Rest API documentation
    - [`floodgate/`](/wiki/floodgate/): Floodgate documentation
    - [`geyser/`](/wiki/geyser): Geyser documentation
    - [`other/`](/wiki/other/): Other projects documentation
- [`i18n/`](/i18n/): Translations for the website
- [`openapi/`](/openapi/): OpenAPI spec files to auto-generate REST API documentation
- [`src/`](/src/): Source of the website
    - [`components/`](/src/components/): React components
    - [`css/`](/src/css/): Styles
    - [`data/`](/src/data/): Data files, such as hosting providers and supported Minecraft versions
    - [`pages/`](/src/pages/): Pages of the website
    - [`renderer/`](/src/renderer/): Renderer for thumbnails
    - [`theme/`](/src/theme/): Overrides base Docusaurus theme, such as importing fa icons
    - [`types/`](/src/types/): TypeScript types
- [`static/`](/static/): Static content
    - [`img/`](/static/img/): Images
- [`docusaurus.config.ts`](/docusaurus.config.ts): Docusaurus configuration file
- [`package.json`](/package.json): Node.js project file
- [`sidebar.ts`](/sidebar.ts): Site sidebar configuration
- [`tsconfig.json`](/tsconfig.json): TypeScript configuration file
- [`yarn.lock`](/yarn.lock): Yarn lock file for Node.js dependencies

## Quick Start

```sh
git clone https://github.com/GeyserMC/GeyserWebsite
cd GeyserWebsite
yarn
yarn start
```