class Requester {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  get(path, token) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'get',
      headers: {
        'Authorization' : 'Bearer' + token,
        'content-type': 'application/json'
      },
    })
  }
  post(path, body, token) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'post',
      headers: {
        'Authorization' : 'Bearer' + token,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
  put(path, body, token) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'put',
      headers: {
        'Authorization' : 'Bearer' + token,
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
  delete(path, token) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'delete',
      headers: {
        'Authorization' : 'Bearer' + token,
        'content-type': 'application/json'
      },
    })
  }
}

const requester =  new Requester('https://167.99.46.0')

export default requester;
