export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3335,
        version: process.env.SERVER_VERSION || 'v1',
        prefix: process.env.SERVER_PREFIX || 'api',
    },
    pipedrive: {
        company_domain: process.env.PIPEDRIVE_COMPANY_DOMAIN || 'melliessa',
        api_token: process.env.PIPEDRIVE_API_TOKEN || "d6d8b0a1b38f1a52fbef86d0257c9ee0af33040d"
    },
    bling: {
        api_key: process.env.BLING_API_KEY || 'a6f36b69783c23d5afac9f368003aa6886f83b40bb124ba17adb1d2cd4fef75ea1c58e2a'
    }
}