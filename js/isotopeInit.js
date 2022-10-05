
// cont7 isotope 작업 시작
    // 변수 생성
    const btns = document.querySelectorAll(".cont7 .btns li");
    // 클릭시 정렬
    btns.forEach(function(item,index){
        item.addEventListener("click",function(e){
            // 페이지 이동 방지
            e.preventDefault();

            // 버튼 활성화 비활성화
            btns.forEach(function(item,index){
                btns[index].classList.remove("turn");
            });
            btns[index].classList.add("turn");
            
            // li태그에 data-portfolio 속성값을 가져와서 해당 클래스이름에 div태그들만 정렬
            let data = item.getAttribute("data-portfolio");
            iso.arrange({
                filter: data,
                transitionDuration: '1s'
            })
        });
    });

    // 정렬 플러그인 기능 작업 시작
    // 변수 생성
    let elem = document.querySelector('.cont7 .boxs');
    let iso = new Isotope( elem, {
        // options
        itemSelector: '.all',
        layoutMode: 'masonry'
    });
