export function getFormatingDate(date: string | Date): string {
	return String(date).split('T')[0];
}
