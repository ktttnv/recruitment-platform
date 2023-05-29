export type RequestOptions = Omit<RequestInit, 'body'> & {
    body?: RequestInit['body'] | Record<string, unknown>;
    headers?: Record<string, string>;
};

enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
}

class Request {
    constructor() {}

    async doRequest(method: RequestMethods, url: string, options?: RequestOptions) {
        const requestInit: RequestInit = {
            method,
            ...options,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: options?.body ? JSON.stringify(options.body) : null,
        } as RequestInit;
        console.log(url, requestInit);
        const response = await fetch(url, requestInit).catch((error) => {
            throw error;
        });

        return response;
    }

    async get(url: string, options?: RequestOptions) {
        return this.doRequest(RequestMethods.GET, url, options);
    }

    async post(url: string, options: RequestOptions) {
        return this.doRequest(RequestMethods.POST, url, options);
    }

    async put(url: string, options: RequestOptions) {
        return this.doRequest(RequestMethods.PUT, url, options);
    }
}

export default Request;
