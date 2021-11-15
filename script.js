function toDecimal(percent) {
  return percent.slice(0, -1) / 100;
}

function setDefaultTipPercent() {
  const defaultTipPercent = document.querySelector('input[type="button"]:nth-child(3)');

  defaultTipPercent.classList.add('selected');

  return defaultTipPercent.value;
}

function updateOutputScreen(customTipAmount=null, customTotal=null) {
  tipAmount.innerText = (Math.round(billAmount.value * tipPercent / numberOfPeople.value * 100) / 100).toFixed(2);
  total.innerText = (Math.round(billAmount.value * (1 + tipPercent) * 100) / 100).toFixed(2);
}

function hasSelectedTip() {
  return document.querySelector('.selected');
}

function deselectBtn() {
  if (hasSelectedTip()) {
    hasSelectedTip().classList.remove('selected');
  }
}

const billAmount = document.getElementById('billAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const tipAmount = document.getElementById('tipAmount');
const total = document.getElementById('total');
const tipButtons = document.querySelector('.tip-buttons');
const customInput = document.getElementById('customInput');
let tipPercent;

document.addEventListener('DOMContentLoaded', () => {
  tipPercent = tipPercent ? tipPercent : 0;
  numberOfPeople.value = numberOfPeople.value ? numberOfPeople.value : 1;

  if (billAmount.value || numberOfPeople.value) {
    updateOutputScreen();
  }
});

billAmount.onkeyup = function() {
  updateOutputScreen()
}

tipButtons.onclick = function(evt) {

  function updateTipButton(clickedTarget) {
    deselectBtn();
    clickedTarget.classList.add('selected');
  }

  const clickedTarget = evt.target;

  if (clickedTarget.type === "button") {
    const percentValue = toDecimal(evt.target.value);

    switch (percentValue) {
      case .05:
        if (tipPercent === percentValue) return; 
        updateTipButton(clickedTarget);
        tipPercent = percentValue;
        break;
      case .1:
        if (tipPercent === percentValue) return; 
        updateTipButton(clickedTarget);
        tipPercent = percentValue;
        break;
      case .15:
        if (tipPercent === percentValue) return; 
        updateTipButton(clickedTarget);
        tipPercent = percentValue;
        break;
      case .25:
        if (tipPercent === percentValue) return; 
        updateTipButton(clickedTarget);
        tipPercent = percentValue;
        break;
      case .5:
        if (tipPercent === percentValue) return; 
        updateTipButton(clickedTarget);
        tipPercent = percentValue;
        break;
    }

    updateOutputScreen();

  }
}

customInput.onkeyup = function() {
  const customPercent = this.value;

  if (customPercent) {
    deselectBtn();
    tipPercent = customPercent / 100;
    console.log(tipPercent);
    updateOutputScreen();
  }
}

numberOfPeople.onkeyup = function() {
  const numberOfPeopleValue = this.value;

  if (numberOfPeopleValue) {
    updateOutputScreen();
  }
}

resetBtn.onclick = function() {
  billAmount.value = '';
  numberOfPeople.value = 1;
  deselectBtn();
  updateOutputScreen();
  customInput.value = '';
}
