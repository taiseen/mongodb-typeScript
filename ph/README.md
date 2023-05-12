> 12 - May - 2023 

# Programming Hero 

* npm init -y
* yarn add -D typescript
* yarn add -D ts-node
* yarn add -D nodemon
* yarn add -D @types/express
* yarn add -D @types/cors
* yarn add express
* yarn add cors
* yarn add mongoose

<br />

#### at - package.json
```js
"scripts": {
    "start": "nodemon",
}
```

#### at - nodemon.json
```js
{
    "watch": ["src"],
    "ext": ".ts,.js",
    "exec": "ts-node ./src/server.ts"
}
```

#### at - tsconfig.json
```js
{
  "compilerOptions": {
    "module": "NodeNext",
    "rootDir": "./src", 
    "outDir": "./dist",
    "noEmit": true,
    "allowImportingTsExtensions": true
  }
}
```