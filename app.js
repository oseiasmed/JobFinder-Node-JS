const express = require('express');
const app = express();


app.get('/', (req, res) => {

    res.send("Tudo certo.Vamos arrebentar com certeza!");
});

const PORT = 3000;

app.listen(PORT, () => {

    console.log('Servidor inicializado com sucesso!');

});
