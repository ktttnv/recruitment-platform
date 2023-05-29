import EasyYandexS3 from 'easy-yandex-s3';
import path from 'path';

import config from '../../config/environment/index';
import { getFileExtname } from './index';
import { UploadFile } from 'easy-yandex-s3/types/EasyYandexS3';

const s3 = new EasyYandexS3({
	auth: {
		accessKeyId: process.env.ACCESS_KEY_ID || '',
		secretAccessKey: process.env.SECRET_ACCESS_KEY || '',
	},
	Bucket: config.yandex.bucketName, 
	debug: true,
});

export async function downloadCV(fileName: string) {
	try {
		const download = await s3.Download(`${config.yandex.folder}${fileName}`);
		return download;
	} catch (error) {
		console.error(`Downloading CV occired with error: ${error}`);
		throw error;
	}
}

export async function uploadCV(userId: string, fileName: string, buffer: Buffer) {
	try {
		const fileExtname = getFileExtname(fileName);

        let upload = await s3.Upload(
            {
                path: fileName,
				name: `${userId}${fileExtname}`,
				buffer: buffer,
            },
            config.yandex.folder
		);
		return upload;
	} catch (error) {
		console.error(`Downloading CV occired with error: ${error}`);
		throw error;
	}
}
