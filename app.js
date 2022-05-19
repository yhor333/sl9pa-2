const input = document.querySelectorAll('.main-custom-input');
const hideDivs = document.querySelectorAll('.main-continue');

function showBlock(event) {
  for (inputs of input) {
    if (inputs.checked) {
      for (let i = 0; i < hideDivs.length; i++) {
        hideDivs[i].style.display = 'block';
      }
    }
  }
}

function hangListeners(item, func, event) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener(event, func);
  }
}

hangListeners(input, showBlock, 'click');
