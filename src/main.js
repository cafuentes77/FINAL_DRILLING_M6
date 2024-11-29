import express from 'express';

const app = express();
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/v1');


app.listen(PORT, () => {
    console.log(`El Servidor está corriendo en el puerto ${PORT}`);
})

