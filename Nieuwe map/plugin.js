

var feild = document.queryselector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.queryselector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function(){
  this.setAttribute('placeholder','')
  this.style.boderColor = '#333'
  btn.style.display = 'block'
}

feil.onblur = function(){
  this.setAttribute('placeholder',backUp)
  this.style.borderColor = '#aaa';

}

clear.onclick = function(){
btn.style.display= 'none';
feild.value = '';

}
