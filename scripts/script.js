'use strict';
const currencyOneEl = document.getElementById('currency-one');
const amountOneEl = document.getElementById('amount-one');
const currencyTwoEl = document.getElementById('currency-two');
const amountTwoEl = document.getElementById('amount-two');

// // function
// const calculate = function () {
//   const currencyOne = currencyOneEl.value;
//   const currencyTwo = currencyTwoEl.value;

//   const url = `https://open.er-api.com/v6/latest/${currencyOne}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const rate = data.rates[currencyTwo];
//       amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
//     });
// };

// // event listeners
// currencyOneEl.addEventListener('change', calculate);
// amountOneEl.addEventListener('input', calculate);
// currencyTwoEl.addEventListener('change', calculate);
// amountTwoEl.addEventListener('input', calculate);

// // initial settings
// calculate();
