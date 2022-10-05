// cont8 슬라이드 구역 작업 시작
    // 변수 생성
    const circle = document.querySelectorAll(".circle li");
    const view = document.querySelector(".view");

    circle.forEach(function(item,index){
        item.addEventListener("click",function(e){
            circle.forEach(function(item,index){
                item.classList.remove("line");
            });
            // 페이지 이동 방지
            e.preventDefault();

            // 태그에 class 달아줘서 border-line 남아있게하기
            item.classList.add("line");
            
            // 슬라이드 화면이동 작동 구현
            view.style.marginLeft = -100 * index + "%";
        });
    });

