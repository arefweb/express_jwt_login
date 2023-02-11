## How to add Typescript to Node.js project
Make sure **`tsc`** is installed globally on your machine. then on the project directory add `tsc --init`  .

Now you have a **`tsconfig.json`** file in your project directory. in the *tsconfig* file change the following properties:

    "rootDir": "./src", 
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist",

In order to use express you need to ad its types too:

      npm i -D @types/express

Also you need to add these two packages for typescript to work:


      npm i -D tpyescript ts-node
create `src` directory and in the `package.json` add:

    "scripts": {  
      "dev": "nodemon src/index.ts",  
      "build": "tsc --project .",
      }

## How to add Eslint to Node.js project

1. install following packages:
 ```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
2. create `.eslintrc` file in root of project and format it like this:
 ```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```
3. ignore files like node_modules and dist in `.eslintignore`
4. Make sure that **WebStorm** Eslint settings is on *automatic eslint configuration*.
5. you can extend configs with some ready-made config packages like for of Shopify's. in order to do that first install the relevant package:
  ```bash
npm install eslint-plugin-shopify --save-dev
```
then update our `.eslintrc`:

    module.exports = {  
      root: true,  
      parser: "@typescript-eslint/parser",  
      plugins: [  
      "@typescript-eslint",  
      ],  
      extends: [  
      "eslint:recommended",  
        "plugin:@typescript-eslint/recommended",  
        "plugin:@shopify/esnext",  
        "plugin:@shopify/node",  
      ],  
      env: {  
      node: true,  
        browser: false,  
        es2021: true,  
      },  
      parserOptions: {  
      ecmaVersion: "latest",  
        sourceType: "module",  
      },  
      rules: {},  
    };


