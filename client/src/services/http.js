class HttpService {
  constructor(baseUrl) {
    this.headers = {
      'Content-Type': 'application/json',
    };
    this.baseUrl = baseUrl;
  }

  setTokenInHeaders(token) {
    this.headers = { Authorization: `Bearer ${token}`, ...this.headers };
  }

  req(method) {
    return (url, body, headers) =>
      fetch(`${this.baseUrl}/${url}`, {
        method,
        headers: { ...this.headers, ...(headers && {}) },
        body: body && JSON.stringify(body),
      })
        .then((res) => {
          if (!res.ok) {
            const error = new Error('HTTP status code: ' + res.status);
            error.response = res;
            error.status = res.status;
            throw error;
          }
          return res.json();
        })
        .then((body) => {
          console.log(body);
          return body;
        });
  }
  get = this.req('get');
  post = this.req('post');
  delete = this.req('delete');
}

const httpInstance = new HttpService('http://localhost:4000/api');

export default httpInstance;
