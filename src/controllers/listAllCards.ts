import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';
import { route } from '@constants/routeType';

export const listAllCards = route.get(
	'/cards',
	async (req: Request, res: Response) => {
		const cards = await prisma.card.findMany({
			select: {
				cardId: true,
				cardName: true,
				cardText: true,
				cardType: true,
				cardImage: true,
				cardLevel: true,
				pendulumEffect: true,
				pendulumScale: true,
				cardRarity: true,
				cardDefense: true,
				cardAttribute: true,
				cardAttack: true,
				_count: true,
				packs: {
					select: {
						packId: true,
						packName: true
					}
				}
			}
		});
		return res.status(200).json(cards);
	}
);
