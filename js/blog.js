import  {productListBlog} from "./data.js";  

function showProductBlog(products){
      if(!Array.isArray(products) || products.length == 0) return false;
      let resust="";
      for(let i=0;i<products.length;i++){
            resust+=`
            <div class="mt-7 mb-3 ">

            <a class="font-bold  text-[26px] md:text-[30px]">
            ${products[i].title}
            </a>

            <div class="flex space-x-4 my-5 md:text-[20px]">
                  <span>${products[i].time}</span> <span>|</span> <span class="text-[#8695A4]">${products[i].majors}</span>
            </div>

            <div >
            ${products[i].short_description}
            </div>

      </div>
      <hr>
      <!-- end -->
            `
      }
      return resust;
}
document.querySelector(".title").innerHTML=showProductBlog(productListBlog);