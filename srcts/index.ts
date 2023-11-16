// INTRODUÇÃO AO TYPESCRIPT - WEB API COM EXPRESS

// ENTRY POINT - index.ts (compilando para -> index.js)
// import * as express from 'express';
import express from 'express';
import Rotas from './routes' ; // ou './routes/index'
const app = express();
// O express.json() é um middleware do express que converte
// o body (corpo, req.body) de requisições POST ou PUT no
// formato JSON a ser tratado pela API.
app.use(express.json());
app.use(Rotas);
app.listen(3000, () => {
console.log('*** API INICIADA NA PORTA 3000***');
console.log('*** PRESSIONE CTRL+C PARA FINALIZAR ***');
});