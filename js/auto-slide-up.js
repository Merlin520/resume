
//找特殊元素，添加offset类

!function () {

let specialTags = document.querySelectorAll('[data-x]');
for(let i = 0;i < specialTags.length;i++){
    specialTags[i].classList.add('offset')
}

//移除距离最近
findClosestAndRemoveOffset();
window.addEventListener('scroll',function (xx) {
    findClosestAndRemoveOffset();
});








//工具函数
function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i = 0;i < specialTags.length;i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }
    // for(let i = 0;i < specialTags.length;i++){
    //     specialTags[i].classList.remove('active');
    // }
    // specialTags[minIndex].classList.add('active');


    //找标签 minIndex是离窗口最近的元素
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#'+ id + '"]');
    let li =a.parentNode;
    let brothersAndME = li.parentNode.children;
    for(let i = 0;i < brothersAndME.length;i++){
        brothersAndME[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}

}.call();