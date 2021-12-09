import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import curEx from './c-ex.js';

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    $("#btnOne").click(function(){
      let userInput = $("#USD").val();
      let currency = $('#pickCurrency').val();
      curEx.currencyEx()
        .then(function(response) {
          if (response instanceof Error){
            $('#cExOutput').text(`${response}.`);
          } else {
            const rate = response.conversion_rates[currency];
            $("#cExOutput").text(`${userInput} USD = ${userInput * rate} ${currency}`);
          }
        });
    });
  });
});
