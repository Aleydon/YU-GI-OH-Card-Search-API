import { route } from '@constants/routeType';
import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';

export const getAllGames = route.get(
	'/games',
	async (req: Request, res: Response) => {
		const games = await prisma.game.findMany();
		return res.status(200).json(games);
	}
);
