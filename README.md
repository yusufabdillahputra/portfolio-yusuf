# Yusuf Portfolio

### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Node.js LTS](https://nodejs.org/en/) _(LTS or Current version)_ installed
3. Knowledge with [Typescript](https://github.com/microsoft/typescript) _(should not be installed globally)_
4. Knowledge with [Tailwind CSS](https://tailwindcss.com/)
5. (recommended) [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Install Node.js

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```

If node is not installed on your machine, you can go to the official nodejs.org website, and choose the version depending on your operating system:

- <a href="https://nodejs.org/en/download/" target="_blank">Install Node.js and npm on Windows, Linux or Mac OSX</a>
- <a href="https://github.com/nvm-sh/nvm" target="_blank">Or, install Node Version Manager to quickly install and use different versions of Node.js</a>

2. Enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed with node from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`_

To setup the template and start installing project dependencies, run:

```bash
pnpm install
```

> **Note:** This will install depenencies form all packages that matches with `pnpm-workspace.yaml`. If you need to clear all `node_modules`, you can use `pnpm clear:all` command.

## 🔃 Run a development server

To start the development server, run:

```bash
pnpm dev
```

This will run the `dev` script from the `package.json` file.

> Access the Tairo frontend in your browser at [http://localhost:3000/](http://localhost:3000/)

## 💡 What to do next ?

Our online documentation is a great place to learn how to use Tairo.
We try to keep it mostly up to date, so you can always find the latest information.

- [Access Online Documentation](https://tairo.cssninja.io/documentation)
- [Access Shuriken UI Documentation](https://shurikenui.com)

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.
