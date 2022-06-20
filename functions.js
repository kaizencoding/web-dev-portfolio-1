//TOGGLE LIGHT AND DARK THEME
let chk = document.getElementById('chk');
let style = document.getElementById('light');
const blackLogo = document.getElementById('tk-black');
const yellowLogo = document.getElementById('tk-yellow');

chk.addEventListener('change', () => {
  if(!chk.checked){
      style.href="CSS/light.css";
      blackLogo.style.visibility='visible';
      yellowLogo.style.visibility='hidden';
    } else {
      style.href="CSS/dark.css"
      blackLogo.style.visibility='hidden';
      yellowLogo.style.visibility='visible';
    }
});


//CLICK TO COPY
const copyBtn = document.getElementById('copy-btn');
const tooltip = document.getElementById('tooltip');

copyBtn.addEventListener('click', () => {
  //copy email (text) to clipboard
  const email = document.getElementById('email').innerText;
  navigator.clipboard.writeText(email);

  //show tooltip
  tooltip.style.visibility='visible';
  tooltip.style.opacity='1';

  //hide tooltip after 1.5 seconds
  const myTimeout = setTimeout(clearTooltip, 1500);

  function clearTooltip() {
    tooltip.style.visibility='hidden';
    tooltip.style.opacity='0';
  };
});