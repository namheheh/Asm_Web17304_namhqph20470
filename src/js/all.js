//menu
function elementMenu() {
      const haha = `
     
      <div class="flex justify-end">
      <button id="button" class="md:hidden mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              class="bi bi-justify"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
      </div>

      <div id="menu" class="hidden text-center md:flex md:justify-end space-x-8 mt-6 font-medium text-[20px] text-[#000000] " >
            <a href="./works.html" class="hover:text-[#FF6464]">Works</a>
            <a href="./blog.html" class="hover:text-[#FF6464]">Blog</a>
            <a href="./index.html" class="hover:text-[#FF6464]">Contact</a>
      </div>
      
      `
      return haha;
}
document.querySelector(".Menu").innerHTML = elementMenu()



const menu = document.getElementById("menu");
const button = document.getElementById("button");

button.addEventListener("click", function () {
      menu.classList.toggle("hidden");
});

// footer
function footer() {
      const footer = `
      <div class="max-w-screen-lg mx-auto mt-[108px]">
            <div class="flex justify-center space-x-8 mb-4 text-[30px]">
                  <i class="fa-brands fa-facebook-square"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="text-center mb-10">
                  <span>Copyright ©2020 All rights reserved </span>
            </div>
      </div>
      `
      return footer;
}
document.querySelector(".footer").innerHTML = footer()
