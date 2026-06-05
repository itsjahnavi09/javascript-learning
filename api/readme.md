

## What I Learned

Through this assignment, I learned how APIs work and how JavaScript can be used to fetch data from them. I also learned how to work with JSON data and use array methods to process and display information.

Some important concepts I learned are:

- APIs 
- The fetch() method
- HTTP GET requests
- JSON data handling
- forEach() 
- Error handling using .catch()

## What is an API?

An API (Application Programming Interface) allows different applications to communicate with each other and exchange data.

For example, when a weather app shows live weather information, it gets that data from a weather API. Similarly, social media apps use APIs to send and receive information from servers.

## How fetch() Works

The fetch() method is used to request data from a server.

Example:

```javascript
fetch("https://example.com/api")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

### How it works:

1. `fetch()` sends a request to the API.
2. The server sends back a response.
3. `response.json()` converts the response into a JavaScript object.
4. `.then()` is used to work with the received data.
5. `.catch()` handles any errors that may occur.

