const url = require('url')

const adress = 'http:www.meusite.combr/catalogo?produtos=cadeira'
const parseurl = new url.URL(adress)

console.logo(parseUrl.host)
console.log(parseUrl.pathname) 
console.node(parseUrl,search)
console.log(parseURL.searchParams.get('produtos'))


