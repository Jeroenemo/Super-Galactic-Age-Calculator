import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
  });
  $('button#user-info').on('click', function() {
    const name = $('#name').val();
    const age = parseInt($('#age').val());
    const diet = $('input:radio[name=diet]:checked').val();
    const exercise = $('input:radio[name=exercise]:checked').val();
    const seatbelt = $('input:radio[name=seatbelt]:checked').val();
    const smoke = $('input:radio[name=smoke]:checked').val();
    const drink = $('input:radio[name=drink]:checked').val();
    let calculator = new Calculator(name, age);
    calculator.lifeExpectancy(diet, exercise, seatbelt, smoke, drink);
    $('#output').text(`Dear ${calculator.user},`)
    $('#output').text(`<li> On Mercury, you are ${calculator.mercuryYearEquivalent(age)} years old.`)
  });
});