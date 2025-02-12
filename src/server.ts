import express from 'express';
import cors from 'cors';

import { getAllGames } from '@routes/getAllGames';
import { pack } from '@routes/pack';
import { getCard } from '@routes/card';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use(getAllGames);
app.use(pack);
app.use(getCard);

app.listen(PORT, () => {
	console.log(`Server runing on localhost://${PORT}`);
});
