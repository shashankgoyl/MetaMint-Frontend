
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
let walletForm = document.querySelector('.wallet-form-container');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}

document.querySelector('#wallet-btn').onclick = () => {
  walletForm.classList.toggle('active');
}

document.querySelector('#close-wallet-btn').onclick = () => {
  walletForm.classList.remove('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');

  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

// Function to show the loader
function loader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('active');
}

// function loaderremove(){
//   const loaderContainer = document.querySelector('.loader-container');
//   loaderContainer.classList.remove('active');
// }

function fadeSVG() {
  const svg = document.getElementById("logosvg");
  setInterval(() => {
    // Toggle opacity between 0 and 1
    svg.style.opacity = (svg.style.opacity === "0") ? "1" : "0";
  }, 600); // Change fade duration as needed
}

function addn(button) {
  var cart = document.querySelector(".cart");
  var carttotal = parseInt(cart.getAttribute('data-totalitems'));
  var newcarttotal = carttotal + 1;

  button.classList.add('sendtocart');

  setTimeout(function() {
    button.classList.remove('sendtocart');
    cart.classList.add('shake');
    cart.setAttribute('data-totalitems', newcarttotal);
    setTimeout(function() {
      cart.classList.remove('shake');
    }, 500);
  }, 1000);
}


window.onload = () => {
  // Check scroll position
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  } else {
    document.querySelector('.header .header-2').classList.remove('active');
  }

  // Call loader function when the page loads
  loader();
  // Call loaderremove function after 1000 milliseconds (1 second)
  // setTimeout(loaderremove, 1000);

  fadeSVG();

  var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
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

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
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
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
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

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
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
}

// // Call the fadeSVG function when the page loads
// window.onload = fadeSVG;

const form = document.querySelector("#subscription-form");
const btn = document.querySelector("#btns");
const btnText = document.querySelector("#btnText");

// Adding a submit event listener to the form
form.addEventListener("submit", (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Simulating validation failure (replace with actual validation logic)
    const isInvalid = false; // Replace this with your actual validation logic

    if (isInvalid) {
        // If validation fails, add the 'red' class to the button
        btn.classList.add("red");
        // Reset the button color after 1 second
        setTimeout(() => {
            btn.classList.remove("red");
        }, 1000);
    } else {
        // If validation succeeds, show animation and delay form submission
        btnText.innerHTML = "Thanks"; // Changing the inner HTML of the button to "Thanks"
        btn.classList.add("active"); // Adding the "active" class to the button

        // Delaying form submission for 1.5 seconds to show the animation
        setTimeout(() => {
            // After the animation, you can submit the form data using AJAX or any other method.
            form.submit();
        }, 1500);
    }
});