export function getRandomNumberArray(count: number, ceil: number): number[] {
    return Array(count).fill(0).map(() => getRandomNumber(ceil));
}

function getRandomNumber(ceil: number) {
    return Math.floor(Math.random() * ceil);
}
