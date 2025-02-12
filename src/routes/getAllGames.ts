import { route } from '@constants/routeType';
import { type Request, type Response } from 'express';

export const getAllGames = route.get(
	'/games',
	(req: Request, res: Response) => {
		res.send('Games');
	}
);
