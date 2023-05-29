import mongoose from 'mongoose';
import config from '../environment';

if (!config.mongo.uri) {
    process.exit(1);
}

const connectOptions: mongoose.ConnectOptions = {
    dbName: config.mongo.dbName,
};

const connectDB = mongoose.connect(config.mongo.uri, connectOptions).then(
    () => {
        console.log('Initializing DB connection');
        console.log('DB connection ready');
        return mongoose.connection;
    },
    (err) => {
        console.error('Error while attempting to connect to db:', err);
        process.exit(1);
    }
);

export default connectDB;
module.exports = connectDB;
