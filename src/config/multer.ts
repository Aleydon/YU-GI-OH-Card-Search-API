import { Request } from 'express';
import path from 'path';
import multer, { FileFilterCallback, Options } from 'multer';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

export const multerConfig = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		filename: (req, file, cb) => {
			const ext = path.extname(file.originalname);
			const name = path.basename(file.originalname, ext);

			cb(null, `${name}-${Date.now()}${ext}`);
		}
	}),
	fileFilter: (req: Request, file, cb: FileFilterCallback) => {
		const allowedMimes = [
			'image/jpeg',
			'image/pjpeg',
			'image/png',
			'image/gif'
		];
		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('Invalid file type.'));
		}
	}
} as Options;
