const gnb = document.querySelectorAll(".gnb li");
// gnb 메뉴 클릭시 해당 cont로 이동 동작 구현
gnb.forEach(function(el,index){
    move(el,index);
});


// 헤더 햄버거메뉴 작업 시작
    // 변수 생성
    let hamMenu = document.querySelector("#header .ham");
    let hamMenuShow = document.querySelector("#header #hamMenu");
    let subGnb = document.querySelectorAll("#header #hamMenu .subGnb > li");
    let hamCloseBtn = document.querySelector("#hamMenu .closeBtn");
    let closeMenu = document.querySelector("#header .closeMenu");
    let point = document.querySelector("#hamMenu .point");

    // gnb의 햄버거 메뉴 클릭시 우측에 메뉴 등장
    hamMenu.addEventListener("click",function(){
        hamMenuShow.classList.add("hamShow");
        closeMenu.style.display = "block";
    });
    // 우측 상단의 X 메뉴 클릭시 우측의 메뉴 사라짐
    hamCloseBtn.addEventListener("click",function(){
        hamMenuShow.classList.remove("hamShow");
        closeMenu.style.display = "none";
    });



// 우측 hamMenu 클릭시 해당 cont로 이동 동작 구현
    subGnb.forEach(function(el,index){
        move(el,index);
    });

// 해당 cont로 이동하는 함수 정의
    function move (el,index){
        el.addEventListener("click",function(e){
            // 페이지 이동 방지
            e.preventDefault();
            // 화면 이동 동작 구현
            let move = contStart[index].offsetTop;
            window.scrollTo({
                top:move,
                behavior:"smooth"
            })
        });
    }

