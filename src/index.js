// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import curEx from './c-ex.js';

// function conversion(response){
//   if (response.conversion_rates[0]){
//     $("#cExOutput").text()
//   }

// }

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let currency = $('#pickCurrency').val();
    curEx.currencyEx(currency);
      .then(function(response) {
        conversion(response);
      });
  });
});
