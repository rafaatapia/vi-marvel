import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

app.listen(3000, console.log('server listening on 3000'));
