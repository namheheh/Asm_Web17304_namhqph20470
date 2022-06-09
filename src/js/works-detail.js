import {productListWorkDetail} from "./data.js";  

const id=new URLSearchParams(window.location.search).get("id")
function showProducts(products){
      if(!Array.isArray(products) || products.length == 0) return false;
      const product=products.find((item) => item.id==id);
      let resust="";
            resust=`
            <h3 class="text-[30px] md:text-[34px] md:w-[506px] font-bold text-[#21243D]">
            ${product.title}
       </h3>

       <div class="flex space-x-8 my-5">
             <span class="bg-[#FF7C7C] text-white px-2 h-6 rounded-2xl font-[900]">${product.year}</span>
             <span class="text-[#21243D]  text-[18px]">${product.majors}</span>
       </div>

       <p>
            ${product.short_description}
       </p>

       <img src="${product.img1}" class="h-[460px] py-11 w-full inline-block" alt="">

       <h3 class="text-[26px] md:text-[30px] font-medium text-[#21243D]">
       ${product.heading1}
        </h3>

        <h3 class="text-[20px] md:text-[24px] font-medium text-[#21243D]">
        ${product.heading2}
        </h3>

        <p>
        ${product.description}

        </p>

       <img src="${product.img2}" class="h-[460px] py-3 w-full inline-block" alt="">
       <img src="${product.img3}" class="h-[460px] py-3 w-full inline-block" alt="">
            `
      
      return resust;
}
document.querySelector(".title").innerHTML=showProducts(productListWorkDetail);