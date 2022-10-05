
// cont1 상단 배너 구역 작업 시작
    // 타이핑 작성 및 삭제 기능 구현
    const typing = document.querySelector(".typing");
    let context = ["Publisher","Web Designer", "Front end", "Back end"];

    // context 배열변수의 순번값 변경
    let stringNumber = 0; 
    // 0부터 8까지 1씩 증가될 변수
    let charIndex = 0;
    // 8부터 0까지 1씩 감소될 변수
    let maxIndex;

    // 자동실행 함수 setInterval 사용해서 일정시감마다 글자타이핑 효과 동작
    let autoTyping = setInterval(function(){
        textToggle();// 함수 호출
    },200);

    function textToggle(){
        // 텍스트 나오는 구간
        if(charIndex < context[stringNumber].length){
            typing.innerText += context[stringNumber].charAt(charIndex);
            // 숫자 1 증가
            charIndex++;

            // 조건문으로 텍스트 순번 값이 글자의 갯수를 초과했는지 확인
            // 텍스트가 전부 출력이 되면 아래의 조건문이 실행됨
            if (charIndex >= context[stringNumber].length){
                // maxIndex는 글자를 감소시켜서 출력하기 위한 순번값
                maxIndex = context[stringNumber].length;

                // 자동실행 멈춤 및 자동실행 함수 호출
                stopAndStart();
            }

        }
        
        // 텍스트 하나씩 사라지는 동작 구현
        else if (maxIndex >= 0) {
            typing.innerText = context[stringNumber].substring(0,maxIndex);
            // 숫자 1 감소
            maxIndex--;
            if(maxIndex < 0) {
                charIndex = 0;
                if(stringNumber == context.length - 1){
                    // 숫자값 다시 초기화시켜서 텍스트 다시 출력되도록 만들어주기
                    stringNumber = 0;
                }
                else {
                    stringNumber++;
                }

                // 자동실행 멈춤 및 자동실행 함수 호출
                stopAndStart();
            }
        }
    }

    // 자동실행 멈춤 및 다시시작 함수 정의
    function stopAndStart(){
        clearInterval(autoTyping);
        setTimeout(function(){
            autoTyping = setInterval(function(){
                textToggle();
            },200);
        },1000);
    }
