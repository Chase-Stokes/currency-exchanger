import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import curEx from './c-ex.js';

function conversion(response){
  let userInput = $("#USD").val();
  let userInput2 = $("#pickCurrency").val();
  if (response.conversion_rates[0] === userInput2){
    $("#cExOutput").text(userInput * userInput2)
  }

}

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
