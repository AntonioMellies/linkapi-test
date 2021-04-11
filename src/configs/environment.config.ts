export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3335,
        version: process.env.VERSION || 'v1',
        prefix: process.env.PREFIX || 'api',
    }
}