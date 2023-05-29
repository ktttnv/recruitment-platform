import { Schema } from 'mongoose';

const skillSchema = new Schema({
    name: String,
    description: String,
});

export default skillSchema;
