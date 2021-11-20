import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import curEx from './c-ex.js';

function conversionRate(response){
  let currency1 = $('#pickCurrency').val();
  if (response.base_code[0] === currency1){
    return $("#cExOutput").text(`The Conversion Rate you have chosen is ${response.amount}` );
  }else {
    $('#cExOutput').text(`There was an ERROR.`);
  }
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let userInput = $("#USD").val();
    console.log(userInput);
    let currency = $('#pickCurrency').val();
    console.log(currency);
    curEx.currencyEx(currency)
      .then(function(response) {
        conversionRate(response);
      });
  });
});
