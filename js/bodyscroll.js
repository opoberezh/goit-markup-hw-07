"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
const targetItem = e.target;
  if (targetItem.closest('.menu-toggle')){
      
    document.documentElement.classList.toggle('is-open');
  }
 
}