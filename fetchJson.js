// File: fetchJson.js

const got = require('got');

const callback = (response) => {
  console.log( JSON.parse(response.body) );
}

// Example urls
// const url = 'https://api.github.com/repos/sinatra/sinatra';
// const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchJson = ( url, callback ) => {
  got(url).then(callback);
};

// Usage
// fetchJson( url, callback );

module.exports = fetchJson;

