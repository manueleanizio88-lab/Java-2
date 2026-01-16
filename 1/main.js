//servidor estrutura

const http = require ('http')
const port = 3000

const server= http.createServer((req,res)=>{
res.setHeader('Content-Type', 'text/html')
res.write('<h1>Olá, este é o meu primeiro server com html</h1>');
<p> testando atualizaçao do codigo...!</p>

res.end()

})
server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});


