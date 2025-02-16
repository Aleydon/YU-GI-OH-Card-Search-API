import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';
import { route } from '@constants/routeType';

export const packSearch = route.get(
	'/pack/:packId',
	async function (req: Request, res: Response) {
		const { packId } = req.params;

		const pack = await prisma.pack.findMany({
			where: {
				packId
			},
			select: {
				packId: true,
				packName: true,
				cards: {
					select: {
						cardId: true,
						cardName: true,
						cardText: true,
						cardType: true,
						cardImage: true
					}
				}
			}
		});
		return res.status(200).json(pack);
	}
);
