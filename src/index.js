import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import curEx from './c-ex.js';

function conversionRate(response){
  if (response.conversion_rates){
    return $("#cExOutput").text(`The Conversion Rate you have chosen is ${response.conversion_rates}` );
  }else {
    $('#cExOutput').text(`There was an ERROR.`);
  }
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let currency = $('#pickCurrency').val();
    curEx.currencyEx(currency)
      .then(function(response) {
        conversionRate(response);
      });
  });
});
