import { type Request, type Response } from 'express';

import { route } from '@constants/routeType';

export const pack = route.get('/pack', (req: Request, res: Response) => {
	return res.send('Pack');
});
