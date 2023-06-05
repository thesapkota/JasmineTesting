window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
const amtUI = document.querySelector("#loan-amount");
const yearsUI = document.querySelector("#loan-years");
const rateUI = document.querySelector("#loan-rate");

function getCurrentUIValues() {
  return {
    //after converting string to a text
    amount: +(document.querySelector("#loan-amount").value),
    years: +(document.querySelector("#loan-years").value),
    rate: +(document.querySelector("#loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const valuesUI = {
    amount: 1000,
    years: 10,
    rate: 10
  }
const amtUI = document.querySelector("#loan-amount");
const yearsUI = document.querySelector("#loan-years");
const rateUI = document.querySelector("#loan-rate");
  amtUI.value = valuesUI.amount; 
  yearsUI.value = valuesUI.years;
  rateUI.value = valuesUI.rate;
  update();
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUI = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUI));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  let principle = values.amount;
 let result = (( principle * monthlyRate)/(1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
  return result;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI =document.querySelector("#monthly-payment");
  monthlyUI.innerText = "$"+monthly;
  
}
