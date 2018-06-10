//点击下拉菜单效果、出现红色
!function () {

    var view = document.querySelector('nav.navMenu');

    var controller = function (view) {

    let liTags = view.querySelectorAll('nav.navMenu > ul > li');
    for(let i = 0;i < liTags.length;i++){
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')
        };
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active');

        };
    }
    //tween指定代码
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    let aTags = document.querySelectorAll('nav.navMenu > ul > li > a');
    for(let i = 0;i < aTags.length;i++){
        aTags[i].onclick = function (x) {
            x.preventDefault();
            let a = x.currentTarget;
            let  href = a.getAttribute('href');//siteWorks
            let element = document.querySelector(href);//通过href获取元素（锚点所在的一整片区域）
            let top = element.offsetTop;//元素距离最顶端的距离


            let currentTop = window.scrollY;
            let targetTop = top - 80;
            let s = targetTop - currentTop;
            var coords = { y:currentTop };
            var t = Math.abs((s/100)*300);
            if(t>500){ t = 500 }
            var tween = new TWEEN.Tween(coords)
                .to({ y:targetTop},t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0,coords.y)
                })
                .start();
        }
    }

    };

    controller(view);

    }.call();