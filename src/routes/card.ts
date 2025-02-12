import { type Request, type Response } from 'express';

import { route } from '@constants/routeType';
import { prisma } from '@config/prisma';

export const getCard = route.get(
	'/card/:cardId',
	async (req: Request, res: Response) => {
		const { cardId } = req.params;

		const card = await prisma.card.findMany({
			where: {
				cardId
			}
		});
		return res.status(200).json(card);
	}
);
