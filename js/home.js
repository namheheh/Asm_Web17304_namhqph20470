import  {productListWork ,productListHome} from "./data.js";  

                 
function showProducts(products){
      if(!Array.isArray(products) || products.length == 0) return false;
      let resust="";
      for(let i=0;i<3;i++){
            resust+=`
              <div class="mt-7 mb-3 md:flex md:space-x-4">
            <img src="${products[i].img}" alt="" class="rounded mx-auto w-[339px]  md:w-none md:w-[246px] md:h-[180px]">
            <div>
                  <a href="./works-detail.html?id=${products[i].id}" class="font-bold text-[24px] block mt-4 md:mt-0 text-[24px]  md:text-[30px] text-[#21243D]">
                  ${products[i].title_head}
                  </a>
                  <div class="flex space-x-8 my-5">
                        <span class="bg-[#142850] text-white px-3 rounded-2xl h-6 font-bold">${products[i].year}</span>
                        <span class="text-[#8695A4] md:text-[20px]">${products[i].title_j}</span>
                  </div>

                  <div class="leading-[23px]">
                        ${products[i].title}
                  </div>
            </div>
      </div>
      <hr>
      <!-- end -->
            `
      }
      return resust;
}
document.querySelector(".title").innerHTML=showProducts(productListWork);

function showProductHome(products){
      if(!Array.isArray(products) || products.length == 0) return false;
      let resust="";
      for(let i=0;i<products.length;i++){
            resust+=`
            <div class="bg-white p-[22px] md:p-[29px] mb-[17px] md:mb-0 ">
            <h3 class="font-bold text-[22px] md:text-[26px] ">
            ${products[i].title}
            </h3>

            <div class=" my-3 md:my-5  md:text-[18px]">
            ${products[i].time} <span class="mx-5">|</span> ${products[i].majors}
            </div>

            <p class="max-w-[350px] ">
            ${products[i]. short_description}
            </p>
            
            </div>
            `
      }
      return resust;
}
document.querySelector(".title2").innerHTML=showProductHome(productListHome);

