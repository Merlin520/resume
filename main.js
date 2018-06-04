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

//点击下拉菜单效果
let liTags = document.querySelectorAll('nav.navMenu > ul > li');
for(let i = 0;i < liTags.length;i++){
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    };
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');

    };
}


