import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';
import { route } from '@constants/routeType';

export const cardSearch = route.get(
	'/card/:cardId',
	async (req: Request, res: Response) => {
		const { cardId } = req.params;

		const card = await prisma.card.findMany({
			where: {
				cardId
			},
			select: {
				cardId: true,
				cardName: true,
				cardText: true,
				cardType: true,
				cardImage: true,
				packs: {
					select: {
						packId: true,
						packName: true
					}
				}
			}
		});
		return res.status(200).json(card);
	}
);
