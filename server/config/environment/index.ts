// TODO nanov94: refactoring
process.env.NODE_ENV = process.env.NODE_ENV || 'local';
const envConfig: Partial<typeof baseConfig> = require('./' + process.env.NODE_ENV + '/server_config') || {};

const isLocalEnv: boolean = process.env.NODE_ENV === 'local' || process.env.IS_LOCAL_ENV === 'TRUE';
const port: string = envConfig.port || process.env.PORT || '8181';
const backendPort: string = '3000'; //envConfig.backendPort || process.env.BACKEND_PORT || port;
const host: string = isLocalEnv ? 'localhost:' + port : envConfig.host;
const useHTTPS = !isLocalEnv;
const appUrl = `${useHTTPS ? 'https://' : 'http://'}${host}`;

const baseConfig = {
    initializeServer: true, //process.env.INITIALIZE_SERVER !== 'FALSE',
    host,
    useHTTPS,
    mongo: {
        uri: 'mongodb://admin:admin@localhost:37017/?authMechanism=DEFAULT', //process.env.mongo_url,
        minPoolSize: 15,
        maxPoolSize: 35,
        minPoolSizeForked: 0,
        maxPoolSizeForked: 3,
        dbName: 'dev',
    },
    port,
    backendPort,
    appUrl,
    isLocalEnv,
    protocol: 'http',
    ip: process.env.IP || '0.0.0.0',
    env: process.env.NODE_ENV,
    yandex: {
        bucketName: 'recruitmentsovkombank',
        folder: '/cv/',
    },
};

module.exports = baseConfig;
export default baseConfig;
