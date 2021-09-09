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
        body: body ?? JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((body) => body)
        .catch((err) => console.log('An error occur while fetching', err));
  }
  get = this.req('get');
  post = this.req('post');
  delete = this.req('delete');
}

const httpInstance = new HttpService('http://localhost:4000/api');

export default httpInstance;
