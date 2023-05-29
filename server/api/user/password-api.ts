import bcrypt from 'bcrypt';

const MAX_PASSWORD_LENGTH = 50;

export async function hashPassword(password: string) {
    if (password.length > MAX_PASSWORD_LENGTH) {
        throw new Error(`Invalid password. Max length = ${MAX_PASSWORD_LENGTH}`);
    }

    const saltRounds = 10;

    const genSalt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, genSalt);
}

export async function validatePassword(candidatePassword: string, passwordDB: string) {
    return bcrypt.compare(candidatePassword, passwordDB);
}
