import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/extension/info', (req,res) => {
  res.json({ ok: true, name: 'Extensão Adaptada', time: new Date().toISOString() });
});

app.get('/api/hello', (req,res) => res.json({ ok:true, msg:'Hello Bootcamp!' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('API on', PORT));
