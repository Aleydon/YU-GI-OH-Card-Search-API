import { type Request, type Response } from 'express';

import { route } from '@constants/routeType';
import { prisma } from '@config/prisma';

export const pack = route.get(
	'/pack/:packId',
	async (req: Request, res: Response) => {
		const { packId } = req.params;

		const pack = await prisma.pack.findMany({
			where: {
				packId
			}
		});
		return res.status(200).json(pack);
	}
);
