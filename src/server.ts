import express from 'express';
import path from 'path';
import cors from 'cors';
import { URL } from 'url';

import { cardSearch } from '@controllers/cardSearch';
import { cardUpload } from '@controllers/cardUpload';
import { listAllCards } from '@controllers/listAllCards';
import { listAllTagForces } from '@controllers/listAllTagForces';
import { packSearch } from '@controllers/packSearch';

const app = express();
const PORT = 3001;
const __dirname = new URL('.', import.meta.url).pathname;

app.use(cors());
app.use(express.json());

app.use(cardSearch);
app.use(listAllCards);
app.use(listAllTagForces);
app.use(packSearch);
app.use(cardUpload);

app.use('/cardImage', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(PORT, () => {
	console.log(`Server running on localhost://${PORT}`);
});
