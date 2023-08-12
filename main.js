const iconNav = document.querySelector(".icon-nav");
const line = document.querySelectorAll(".line")

  iconNav.addEventListener('click',function () {
      const navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active")
      
  });
      iconNav.onclick = function () {
       const  navBar = document.querySelector(".nav-bar");
          navBar.classList.toggle("active");
          console.log(navBar);
      }