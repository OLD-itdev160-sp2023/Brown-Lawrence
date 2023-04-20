//welcome message
var user='Larry';
var salutation='Hello, ';
var greeting=salutation + user + '!  Here are the latest Atom reviews.';
var greetingEl=document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price*studentDiscount),
    priceEl = document.getElementById('price'),
    StudentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
StudentPriceEl.textContent = studentPrice.toFixed(2);s