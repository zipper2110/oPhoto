class ApiService {
  constructor() {
    this.url = 'http://127.0.0.1:3000'
  }

  post(method, data) {
    var myInit = {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(data)
    };
    console.log(data);
    return fetch(`${this.url}${method}`, myInit).then(response => response.json());
  }

  registerSubscriber(name, latitude, longitude) {
    return this.post('/register/subscriber', { name, latitude, longitude });
  }

  getSubscriberStatus() {
    return this.post(`/status/:${this.subscriberId}`);
  }

  set subscriberId(id) {
    this._id = id;
  }

  get subscriberId() {
    return this._id;
  }
 }

export const apiService = new ApiService();