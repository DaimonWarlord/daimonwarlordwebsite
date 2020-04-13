$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

var modal = document.getElementById('sign-in-modal');

var modalBtn = document.getElementById('sign-in-btn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});