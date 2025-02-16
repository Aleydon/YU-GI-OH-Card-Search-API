import { type Request, type Response } from 'express';

import { prisma } from '@config/prisma';
import { route } from '@constants/routeType';

import multer from 'multer';
import { multerConfig } from '@config/multer';

const upload = multer(multerConfig);

export const cardUpload = route.post(
	'/card',
	upload.single('cardImage'),
	async function (req: Request, res: Response) {
		const { cardName, cardText, packName } = req.body;
		const cardImg = req.file;

		const card = await prisma.card.create({
			data: {
				cardName,
				cardText,
				cardImage: cardImg ? cardImg.filename : null,
				packs: {
					connectOrCreate: {
						where: {
							packId: packName
						},
						create: {
							packName
						}
					}
				}
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
