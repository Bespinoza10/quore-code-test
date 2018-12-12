///////  Form Validation  \\\\\\\
function validateMobileForm(){
  var name = $("#required-name-mobile");
  var email = $("#required-email-mobile");
  var message = $(".validation-message");
  
  if (name.val() == ""){
    name.addClass("input-error");
    if (email.val() == ""){
      email.addClass("input-error");
    } else{
      email.removeClass("input-error");
    }
    message.css({ display: "block" });
    return false;
  } else{
    name.removeClass("input-error");
    message.css({ display: "none" });
  }
  if (email.val() == ""){
    email.addClass("input-error");
    message.css({ display: "block" });
    return false;
  } else{
    email.removeClass("input-error");
    message.css({ display: "none" });
  }
}


function validateForm(){
  var name = $("#required-name");
  var email = $("#required-email");
  var message = $(".validation-message");
  
  if (name.val() == ""){
    name.addClass("input-error");
    if (email.val() == ""){
      email.addClass("input-error");
    } else{
      email.removeClass("input-error");
    }
    message.css({ display: "block" });
    return false;
  } else{
    name.removeClass("input-error");
    message.css({ display: "none" });
  }
  if (email.val() == ""){
    email.addClass("input-error");
    message.css({ display: "block" });
    return false;
  } else{
    email.removeClass("input-error");
    message.css({ display: "none" });
  }
}

///////  Modal  \\\\\\\

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}