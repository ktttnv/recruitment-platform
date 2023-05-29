import path from 'path';

export function getFileExtname(file: string) {
	return path.extname(file).slice(1);
}
