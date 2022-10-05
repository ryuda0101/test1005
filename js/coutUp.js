// cont3 카운트다운 작업 작업 시작
    // 변수 생성
    let cont3Start = document.querySelector(".cont3").offsetTop;
    let cont2Start = document.querySelector(".cont2").offsetTop;
    const left = document.querySelector(".cont2 .bot .leftBox");
    let check = true;

    let list = [
        {
            plus:10,
            tag:".number1",
            complete:1391,
            speed:20
        },
        {
            plus:3,
            tag:".number2",
            complete:445,
            speed:20
        },
        {
            plus:1,
            tag:".number3",
            complete:133,
            speed:20
        },
        {
            plus:3,
            tag:".number4",
            complete:775,
            speed:10
        },
        {
            plus:2,
            tag:".number5",
            complete:555,
            speed:10
        }
    ];

    // 함수 정의
    function count(plus,tag,com,speed){
        // 상단의 check값 false로 바꿔줘서 위의 조건문 실행 못하게 하기 / setInterval 안에 넣어주지 않아야 반복실행으로 코드가 꼬이지 않는다.
        // 즉, count 함수가 실행됨과 동시에 check를 false로 만들어줘서 스크롤시 동작은 한번만 동작되도록 해준다!
        check = false;
        // 지역변수로 0을 담은 변수 num을 설정해줘야 함수가 1391을 해결하고 두번째, 세번째 활동을 할때 문제가 없다. 
        let num = 0;
        // setInterval로 자동실행 시작
        let act = setInterval(function(){
            num += plus;
            if(num >= com){
                // 만약 complete값에 도달한다면 clearInterval로 카운트를 멈춰준다.
                clearInterval(act);
                // 화면에는 complete의 값을 보여준다.
                document.querySelector(tag).innerHTML = com;
            }
            else {
                // 화면에는 카운트 되고 있는 num값을 보여준다.
                document.querySelector(tag).innerHTML = num;
            }
        },speed);
    }