// 스크롤 이벤트 작동 작업 시작
    // 변수 생성
    const header = document.querySelector("#header");
 
    const contStart = document.querySelectorAll("#container > div");

    const cont2_bot = document.querySelector(".cont2 .bot");



    // 스크롤 이벤트 작동
    window.addEventListener("scroll",function(){
        // 현 위치값 변수 scTop에 담아주기
        let scTop = window.scrollY;
        
        // 헤더 스크롤시 동작
        // 스크롤바의 위치가 cont2구역의 시작위치값 -40을 한 위치보다 크다면
        if (scTop > cont2Start - 40) {
            header.classList.add("fixed");
        }
        else {
            header.classList.remove("fixed");
        }

        // cont2 스크롤시 동작
        if (scTop >= cont2Start){
            cont2_bot.classList.add("move");
        }
        
        // cont3 스크롤시 동작
        if (scTop >= cont3Start){
            // 카운트 기능 멈춰주는 조건문 실행
            if (check == true){
                // forEach 반복문으로 list변수에 있는 데이터 가져오기
                list.forEach(function(el){
                    // 함수 호출
                    count(el.plus, el.tag, el.complete, el.speed);
                });
            }
        }
        gnb.forEach(function(el,index){
            let scCont = contStart[index].offsetTop
            // 해당 cont 시작 위치에 가면 gnb 메뉴에 class on이 붙는 동작 구현
            if (scTop >= scCont) {
                turnRed(el,index);
            }
        })

    });

    
    // 해당 cont 시작 위치에 가면 gnb 메뉴에 class on이 붙는 동작 함수 정의
    function turnRed (tag,location){
        gnb.forEach(function(tag,location){
            tag.classList.remove("on");
        });
        gnb[location].classList.add("on");
    }

    // 
    function turnBig (el,index){
        subGnb.forEach(function(el,index){
            el.classList.remove("big");
        });
        subGnb[index].classList.add("big");
    }