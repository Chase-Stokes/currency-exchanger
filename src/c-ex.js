export default class curEx {
  static currencyEx(){
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      redirect: 'follow'
    };
    
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`, requestOptions)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  } 
}



