/*        Menu Container Script        */

const menu_open_btn = document.querySelector('.menu-open-btn');
const menu_close_btn = document.querySelector('.menu-close-btn');
const menu_container = document.querySelector('.menu-container');
const counterContainer = document.querySelector('.counter-container');
const counter_1 = document.querySelector('.counter-1');
const counter_2 = document.querySelector('.counter-2');
const counter_3 = document.querySelector('.counter-3');
const counter_4 = document.querySelector('.counter-4');


menu_open_btn.addEventListener('click', () => {
    menuBox('open');
})
menu_close_btn.addEventListener('click', () => {
    menuBox('close');
})


const menuBox = (mode) => {
    if(mode === 'open'){
        menu_container.style.right = '0px';
        console.log('Menu Opened');
    } else {
        menu_container.style.right = '-950px';
        console.log('Menu Closed');   
    }
}

counterContainer.addEventListener('click', () => { 
    let int_1 = setInterval( () => {
        counter(245, counter_1, int_1);
    }, 70)
 
    let int_2 = setInterval( () => {
        counter(12, counter_2, int_2);
    }, 70)

    let int_3 = setInterval( () => {
        counter(247, counter_3, int_3);
    }, 70)

    let int_4 = setInterval( () => {
        counter(6, counter_4, int_4);
    }, 70)

var count = 0;

function counter(num, elem, int){
    count++;
    if(count >= num){
        clearInterval(int)
        elem.innerHTML = num
    } else{
        elem.innerHTML = count;
    }
}   
})



/*         Portfolio Filter Script                */

const allImgBtn = document.querySelector('.all-img-btn');
const appImgBtn = document.querySelector('.app-img-btn');
const cardImgBtn = document.querySelector('.card-img-btn');
const webImgBtn = document.querySelector('.web-img-btn');
const portfolioContainer = document.querySelector('.portfolio-container');
const appImgContainer = ['images/portfolio/portfolio-1.jpg', 'images/portfolio/portfolio-3.jpg', 'images/portfolio/portfolio-5.jpg'];
const cardImgContainer = ['images/portfolio/portfolio-2.jpg','images/portfolio/portfolio-4.jpg','images/portfolio/portfolio-6.jpg'];
const webImgContainer = ['images/portfolio/portfolio-7.jpg','images/portfolio/portfolio-8.jpg','images/portfolio/portfolio-9.jpg'];
const navBar = document.querySelector('.portfolio-nav');
const navBarItems = navBar.querySelectorAll('li') ;
const allImgContainer = portfolioContainer.querySelectorAll('.portfolio-img');

var allImgArray = [];
for(let i = 0; i < allImgContainer.length; i++) {
    allImgArray[i] = allImgContainer[i].src;
}

allImgBtn.addEventListener('click', () =>{
    display(allImgArray, allImgBtn);
})

appImgBtn.addEventListener('click', () =>{
    display(appImgContainer, appImgBtn);
})

cardImgBtn.addEventListener('click', () =>{
    display(cardImgContainer, cardImgBtn);
})

webImgBtn.addEventListener('click', () =>{
    display(webImgContainer, webImgBtn);
})


const display = (myArray, btn) => {
    portfolioContainer.innerHTML = '';

    for(let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].classList.remove('active')
    }
    
    btn.classList.add('active');
    myArray.forEach(item =>{
    var divElem = document.createElement('div');
    divElem.classList.add('col-3');
    divElem.classList.add('app-img-container');
    
    var text;
    text = `
        <img src=${item} alt="">
        <div class="portfolio-hover-col">
            <div class="hover-col">
                <span class="material-icons btn">add</span>
                <span class="material-icons btn">attach_file</span>
            </div>
        </div>`;
    
        divElem.innerHTML = text;
        portfolioContainer.append(divElem);
    })
}
/*
 for(let i = 0; i < appImgContainer.length; i++) {
        var divElem = document.createElement('div');
        divElem.classList.add('col-3');
        divElem.classList.add('app-img-container');
        var imgElem = document.createElement('img');
        imgElem.src = appImgContainer[i];
        divElem.appendChild(imgElem);
        portfolioContainer.innerHTML = '';
        portfolioContainer.innerHTML = divElem;
    }
*/


/*                Testimonial Slide Show                   */

const testimonialIndicator = document.querySelector('.testimonial-indicator');
const indicatorBtn = testimonialIndicator.querySelectorAll('button');
const testimonialWrapper = document.querySelector('.testimonial-row');


let currentSlide = 0;

 slideShow();
function slideShow() {

for(let i = 0; i < indicatorBtn.length; i++) {
    indicatorBtn[i].addEventListener('click', () => {
        indicatorBtn[currentSlide].classList.remove('active');
        indicatorBtn[i].classList.add('active');
        testimonialWrapper.style.transform = `translateX(-${10 * i}%)`;
        currentSlide = i;
    })
}
}