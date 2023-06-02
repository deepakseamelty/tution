let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




function submitHandler(e) {
  e.preventDefault();
  let formdata = new FormData(e.target);
  formdata.append("action", "registerContact")
  try {
    if (!checkPhone(formdata.get('phone'))) throw new Error("Enter valid phone number")
    $.ajax({
      url: 'http://localhost/backend/contact.php',
      data: formdata,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function (data) {
        if (data == 200) {
          alert('contact has been submitted successfully');
          window.location.reload()
        } else alert('Submission not successfull')
      }
    });
  } catch (error) {
    alert(error)
  }
}
function checkPhone(phone) {
  phone = phone.replace(/[^0-9]/g, '');
  if (phone.length === 10) return true;
  else return false;
}