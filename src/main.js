import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
  });
  $("button#submit").on('click', function() {
    const name = $('#name').val();
    const age = parseInt($('#age').val());
    let calculator = new Calculator(name, age);
    console.log(name);
    console.log(age);
    console.log(calculator);
  });
});