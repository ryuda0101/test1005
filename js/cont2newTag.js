

// cont2 양쪽에서 텍스트, 이미지 날아오는것 작업 시작
    // 변수 생성
    // cont2 의 box태그들 객체로 정리
    let cont2Box = [
        {
            icon:"fa-solid fa-image",
            title:"Unique Layout",
            subText:"A robust, multipurpose template built with modularity<br>at the core."
        },
        {
            icon:"fa-solid fa-server",
            title:"Online Live Support",
            subText:"You can build your site in-browser with modular<br>interface blocks."
        },
        {
            icon:"fa-solid fa-tablet-button",  
            title:"Responsive Design",
            subText:"There are many variations of passages of Lorem Ipsum<br>available."
        }
    ]

    const rightBox = document.querySelector(".cont2 .bot .rightBox");
    let show = "";

    cont2Box.forEach(function(element){
                    show += `<div class="textBox">
                                <i class="${element.icon}"></i>
                                <div class="text">
                                    <h3>${element.title}</h3>
                                    <p>${element.subText}</p>
                                </div>
                            </div>`
    });

    rightBox.innerHTML = show;