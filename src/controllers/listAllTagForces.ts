import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';
import { route } from '@constants/routeType';

export const listAllTagForces = route.get(
	'/games',
	async function (req: Request, res: Response) {
		const games = await prisma.game.findMany();
		return res.status(200).json(games);
	}
);
