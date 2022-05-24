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