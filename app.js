const input = document.querySelectorAll('.main-custom-input')

function showBlock(event) {
  for (inputs of input) {
    if (inputs.checked) {
      let hideDiv = document.querySelector('.main-continue');
      console.log(hideDiv)
      hideDiv.style.display = 'block';
    }

  }
}

input[0].addEventListener('click', showBlock)
input[1].addEventListener('click', showBlock)
