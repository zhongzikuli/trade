let baseUrl = '';


if (process.env.NODE_ENV == 'test') {
  baseUrl = `http://192.168.0.109:5555/api/v1/`;

} else if (process.env.NODE_ENV == 'production') {
  baseUrl = `http://192.168.0.109:5555/api/v1/`;

}

export {baseUrl}
