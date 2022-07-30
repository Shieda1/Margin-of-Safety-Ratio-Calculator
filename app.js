// https://calculator.swiftutors.com/margin-of-safety-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginofSafetyRatioRadio = document.getElementById('marginofSafetyRatioRadio');
const marginofSafetyRadio = document.getElementById('marginofSafetyRadio');
const totalSalesRadio = document.getElementById('totalSalesRadio');

let marginofSafetyRatio;
let marginofSafety = v1;
let totalSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginofSafetyRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin of Safety';
  variable2.textContent = 'Total Sales';
  marginofSafety = v1;
  totalSales = v2;
  result.textContent = '';
});

marginofSafetyRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin of Safety Ratio';
  variable2.textContent = 'Total Sales';
  marginofSafetyRatio = v1;
  totalSales = v2;
  result.textContent = '';
});

totalSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Margin of Safety Ratio';
  variable2.textContent = 'Margin of Safety';
  marginofSafetyRatio = v1;
  marginofSafety = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marginofSafetyRatioRadio.checked)
    result.textContent = `Margin of Safety Ratio = ${computeMarginofSafetyRatio().toFixed(2)} %`;

  else if(marginofSafetyRadio.checked)
    result.textContent = `Margin of Safety = ${computeMarginofSafety().toFixed(2)}`;

  else if(totalSalesRadio.checked)
    result.textContent = `Total Sales = ${computeTotalSales().toFixed(2)}`;
})

// calculation

function computeMarginofSafetyRatio() {
  return (Number(marginofSafety.value) / Number(totalSales.value)) * 100;
}

function computeMarginofSafety() {
  return (Number(marginofSafetyRatio.value) / 100) * Number(totalSales.value);
}

function computeTotalSales() {
  return Number(marginofSafety.value) / (Number(marginofSafetyRatio.value) / 100);
}