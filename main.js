// //状态机
// portfolio1.onclick = function () {
//     portfolioBar.className = 'bar state-1'
// };
//
// portfolio2.onclick = function () {
//     portfolioBar.className = 'bar state-2'
// };
//
// portfolio3.onclick = function () {
//     portfolioBar.className = 'bar state-3'
// };

//清除loading
loadingPage.classList.remove('active');


//添加offset类
// let specialTags = document.querySelectorAll('[data-x]');
// for(let i = 0;i < specialTags.length;i++){
//     specialTags[i].classList.add('offset')
// }

// setTimeout(()=>{
//     findClosestAndRemoveOffset()
// },200);


// findClosestAndRemoveOffset();
// window.addEventListener('scroll',function (xx) {
//     findClosestAndRemoveOffset();
// });



// //滑动
// window.addEventListener('scroll',function (xx) {
//     if (window.scrollY > 0) {
//         topNavBar.classList.add('sticky')
//     } else {
//         topNavBar.classList.remove('sticky')
//     }
// });

    // function findClosestAndRemoveOffset() {
    //     let specialTags = document.querySelectorAll('[data-x]');
    //     let minIndex = 0;
    //     for(let i = 0;i < specialTags.length;i++){
    //         if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
    //             minIndex = i
    //         }
    //     }
    //     // for(let i = 0;i < specialTags.length;i++){
    //     //     specialTags[i].classList.remove('active');
    //     // }
    //     // specialTags[minIndex].classList.add('active');
    //
    //
    //     //找标签 minIndex是离窗口最近的元素
    //     specialTags[minIndex].classList.remove('offset');
    //     let id = specialTags[minIndex].id;
    //     let a = document.querySelector('a[href="#'+ id + '"]');
    //     let li =a.parentNode;
    //     let brothersAndME = li.parentNode.children;
    //     for(let i = 0;i < brothersAndME.length;i++){
    //         brothersAndME[i].classList.remove('highlight');
    //     }
    //     li.classList.add('highlight');
    // }

// //点击下拉菜单效果、出现红色
// let liTags = document.querySelectorAll('nav.navMenu > ul > li');
// for(let i = 0;i < liTags.length;i++){
//     liTags[i].onmouseenter = function (x) {
//         x.currentTarget.classList.add('active')
//     };
//     liTags[i].onmouseleave = function (x) {
//         x.currentTarget.classList.remove('active');
//
//     };
// }
// //tween指定代码
// function animate(time) {
//     requestAnimationFrame(animate);
//     TWEEN.update(time);
// }
// requestAnimationFrame(animate);
//
// let aTags = document.querySelectorAll('nav.navMenu > ul > li > a');
// for(let i = 0;i < aTags.length;i++){
//     aTags[i].onclick = function (x) {
//         x.preventDefault();
//         let a = x.currentTarget;
//         let  href = a.getAttribute('href');//siteWorks
//         let element = document.querySelector(href);//通过href获取元素（锚点所在的一整片区域）
//         let top = element.offsetTop;//元素距离最顶端的距离
//
//
//         let currentTop = window.scrollY;
//         let targetTop = top - 80;
//         let s = targetTop - currentTop;
//         var coords = { y:currentTop };
//         var t = Math.abs((s/100)*300);
//         if(t>500){ t = 500 }
//         var tween = new TWEEN.Tween(coords)
//             .to({ y:targetTop},t)
//             .easing(TWEEN.Easing.Quadratic.InOut)
//             .onUpdate(function () {
//                 window.scrollTo(0,coords.y)
//             })
//             .start();
//     }
// }

