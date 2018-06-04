//状态机
portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
};

portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
};

portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
};

//清除loading
loadingPage.classList.remove('active');

//滑动
window.onscroll = function (xx) {
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
};

//点击下拉菜单效果、出现红色
let liTags = document.querySelectorAll('nav.navMenu > ul > li');
for(let i = 0;i < liTags.length;i++){
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    };
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');

    };
}

let aTags = document.querySelectorAll('nav.navMenu > ul > li > a');
for(let i = 0;i < aTags.length;i++){
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let  href = a.getAttribute('href');//siteWorks
        let element = document.querySelector(href);//通过href获取元素（锚点所在的一整片区域）
        let top = element.offsetTop;//元素距离最顶端的距离
        window.scrollTo(0,top - 80)//滑动距离
    }
}

