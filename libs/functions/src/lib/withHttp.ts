export const withHttp = (url: string) =>
    url.replace(/^(?:(.*:)?\/\/)?(.*)/i, (match, schemma, nonSchemmaUrl) =>
        schemma ? match : `http://${nonSchemmaUrl}`
    );
