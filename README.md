# Geral

## Iniciar Projeto

npm init -y

[NPM](https://www.npmjs.com/)

## Mocha

[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

npm install -g mocha

### Rodar teste

mocha `nome do arquivo`
Se o nome do arquivo não for informado irá buscar pelo **test.js**

Outra forma é mudar o script de teste no **package.json** para **mocha**

````JS
{
  "name": "06-cli",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
````

Após essa alteração é possível rodar o teste com `npm test` ou `npm t`

## Links Uteis

1. Entendendo mais sobre [promisify](https://nodejs.org/dist/latest-v8.x/docs/api/util.html)
2. Sobre map, filter e reduce -> [video](https://www.youtube.com/watch?v=D_MExaVe95w)
3. Sobre ... no JS [Rest Parameters & Spread Operators](https://dev.to/sagar/three-dots---in-javascript-26ci)
4. Sobre 'commander' [npm commander](https://www.npmjs.com/package/commander)