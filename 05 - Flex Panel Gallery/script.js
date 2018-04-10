const panels = document.querySelectorAll('.panel');

function toggleopen (){
    this.classList.toggle('open');
}

function toggleactive (e){
   if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
   }
}

panels.forEach(panel => panel.addEventListener('click', toggleopen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleactive));