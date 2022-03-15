// COPY TO CLIPBOARD

(() => {
  let buttons = document.getElementsByClassName('btn-copy');

    for(let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener('click', e => {

        let button = e.target;
        let copy = button.parentNode.parentNode.getElementsByClassName('copy-text')[0].innerText;
        let text = document.createElement('input');
        let body = document.querySelector('body');

        text.setAttribute('type', 'text');
        text.value = copy;
        body.appendChild(text);
        text.select();
        document.execCommand('copy');
        body.removeChild(text);

        if (button.innerHTML == 'Copy') {
          button.innerHTML = 'Copied';
        }
      });
    }
})();