export function getBase64FromUrl(url: Buffer | string) {
	return Buffer.from(url).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export function getUrlFromBase64(url: string) {
	const urlWithPadding = url.length % 4 === 0 ? url : url + '='.repeat(4 - (url.length % 4));
	return Buffer.from(urlWithPadding.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString();
}
