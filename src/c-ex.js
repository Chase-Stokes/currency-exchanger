export default class curEx {
  static currencyEx(base_code){
    const requestOptions = {
      method: 'GET',
      mode: 'no-cors',
      redirect: 'follow'
    };
    
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${base_code}`, requestOptions)
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



