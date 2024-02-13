const hamburg=document.getElementById("menu_btn");
const hiddenMenu=document.getElementById("hide-menu");
const closeBtn=document.getElementById("close-btn");
const cakesbtn=document.getElementById("Cakes-btn");
const biscuitBtn=document.getElementById("Biscuits-btn");
const pastryBtn=document.getElementById("Pastry-btn");
const pizzaBtn=document.getElementById("pizza-btn");

const cakesSec=document.getElementById("Cakes");
const biscuitSec=document.getElementById("Biscuits");
const pastrySec=document.getElementById("Pastry");
const pizzaSec=document.getElementById("pizza");
let items=[
    {
        img:"https://homefoodies.pk/wp-content/uploads/2022/12/time_greet_new_img-1-1-1.png"
    },
    {
        img:"https://img.freepik.com/premium-vector/set-cute-cupcakes-vector-illustration-collection-unicorn-cupcakes-flower-cupcakes_945253-108.jpg?w=2000"
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/002/198/099/original/sweet-bakery-background-with-glazed-donuts-cheesecake-and-cupcakes-with-cherry-strawberries-and-blueberries-hand-made-lettering-desert-for-menu-food-design-vector.jpg"
    },
    {
        img:"https://img.freepik.com/premium-vector/delicious-cupcake-invitation-dessert-vector-illustration-design-cupcake-party_629728-10.jpg?w=2000"
    }, 
    {
     img:"https://marketplace.canva.com/EAFRR6ueG6c/2/0/1600w/canva-white-brown-modern-thank-you-for-your-order-card-vunzH_DlYyQ.jpg"
        
    }
];



const tehzeeb_img=document.getElementById("logo-tehzeeb");
const main_menu=document.getElementById("main-menu");
let prev=document.getElementById("prev-btn");
let next=document.getElementById("next-btn");
let menu_img=document.getElementById("main-menu-img");
let currentItem=-1;




tehzeeb_img.addEventListener('click',function(){
    main_menu.style.display='block';
})
hamburg.addEventListener('click',function(){
    hiddenMenu.style.display='block';
    menu_btn.style.display='none';
})
closeBtn.addEventListener('click',function(){
    hiddenMenu.style.display='none';
    menu_btn.style.display='block';
})

function hideSection(){
    main_menu.style.display='none';
    cakesSec.style.display='none';
    biscuitSec.style.display='none';
    pastrySec.style.display='none';
    pizzaSec.style.display='none';
}

function showSection(section){
    hideSection();
    section.style.display='block';
}

cakesbtn.addEventListener('click',function(){
    showSection(cakesSec)
})
biscuitBtn.addEventListener('click',function(){
    showSection(biscuitSec);
})
pastryBtn.addEventListener('click',function(){
    showSection(pastrySec);
})
pizzaBtn.addEventListener('click',function(){
    showSection(pizzaSec);
})


prev.addEventListener('click',function(){
    if(currentItem>=0){
        currentItem--;
        showImg(currentItem);

    }
})

next.addEventListener('click',function(){
    if (currentItem<items.length-1){
        currentItem++;
    showImg(currentItem);
    }
   
})
function showImg(person){
    let item=items[person];
    menu_img.innerHTML = `<img src="${item.img}" height="600" width="1300">`;
        menu_img.src=item.img;
       
}

