const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://v6.exchangerate-api.com/v6/api_key=${process.env.API_KEY}/latest/USD`, requestOptions)
.then(function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
})
.catch(function(error) {
  return error;
});
