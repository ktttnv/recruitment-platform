function formatToThousands(money: number): string {
    return `${money / 1000}к`;
}

export function getSalaryRange(from: number, to: number): string {
    return `${formatToThousands(from)}-${formatToThousands(to)}`;
}
