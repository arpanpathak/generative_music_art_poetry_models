
# GenerativeAI Models for Music, Art and Poetry

> This is a MonoRepo for GenerativeAI and other Machine Learning models for Music, Art & Poetry. This is a Multi Modular **MonoRepo**  configured to use `Python3` and `TypeScript` and multiple programming languages to 
> 1. Interactively build models with `REPL Notebook` 
> 2. Quickly Build & Ship APIs to Cloud, expose for frontend use using `Serverless` technologies.
> 3. Leverage Asynchronous & Parallel Processing Hardwares
>

## Guide to get started
### Clone the Repository locally

```bash
# Run this to clone the MonoRepo
git clone https://github.com/arpanpathak/generative_music_art_poetry_models.git
```

  

### Install Dependencies
If you're using this package for first time after cloning the monorepo then install all dependencies by executing the following in a terminal :- 
```
npm install
```

If you want to run the API Server for Machine Learning APIS then execute

```bash
npm run build && npm start
```

**`npm run build` generates transpiled down `JS` files in `build` directory. `index.js` is the entry point for Node.JS engine**

### Install Interactive Kernels

>If you want to build ML Models Interactively in Jupuyter Notebook with
>`TypeScript` or `Python` then execute the following commands :-

  

```
# This installs TypeScript Kernel for 
npm install -g tslab

# To check installed version of TypeScript kernel
tslab install --version

# Register the tslab kernal into Juputer Notebook available kernels
tslab install --python=python3

# Check available/installed Kernels
jupyter kernelspec list

# To Start the JupyterNotebook server 
jupyter notebook
```

## Available Models/APIs
`TBD`

## Shipping to Cloud
`TBD`