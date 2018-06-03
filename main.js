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


window.onscroll = function (xx) {
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
};



