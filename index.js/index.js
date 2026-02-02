const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

const products = [
    {
        id: 1,
        title: "Livro",
        princ: 12.99,
        description: "Um guia completo sobre Node.js e Handlebars.",
        sales: 150,
        reviews: ["Ótimo livro!", "Me ajudou muito no projeto."]
    },
    {
        id: 2,
        title: "Caneca",
        princ: 49.99,
        description: "Caneca de cerâmica preta fosca.",
        sales: 85,
        reviews: ["Linda!", "Chegou rápido."]
    },
    {
        id: 3,
        title: "Camisa",
        princ: 59.99,
        description: "Camisa 100% algodão para desenvolvedores.",
        sales: 210,
        reviews: ["Tecido muito bom.", "A estampa é incrível."]
    }
];

app.get('/', (req, res) => {
    res.render('home', { products });
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = products[id - 1]; 
    res.render('product', { product });
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
