// cont11 폼태그 유효성 검사 작업
    // 변수 생성
    const userCheck = document.querySelectorAll(".cont11 .bot_form input");
    const showResult = document.querySelectorAll(".cont11 .bot_form span");
    const completeBtn = document.querySelector(".cont11 .bot_form a")

    let checkList = [
        {
            regexCheck:/^[ㄱ-힣]{3,4}$/,
            correct:"이름이 정상적으로 입력되었습니다.",
            wrong:"이름은 3~4자리수 사이의 한글로 작성해야 합니다.",
            trueOrfalse:false
        },
        {
            regexCheck:/^[\w]+\@+[a-z]+\.[a-z]{2,3}$/,
            correct:"이메일이 정상적으로 입력되었습니다.",
            wrong:"이메일을 다시한번 확인해 주세요.",
            trueOrfalse:false
        },
        {
            regexCheck:/^[\d]{3,7}$/,
            correct:"접수번호가 정상적으로 입력되었습니다.",
            wrong:"접수번호는 3~7자리수 사이의 숫자로 작성해야 합니다.",
            trueOrfalse:false
        },
        {
            regexCheck:/^[ㄱ-힣\w\!\@\#\$\%\^]{1,}$/,
            correct:"제목을 형식에 맞게 입력하였습니다.",
            wrong:"제목은 한글, 영어, 숫자와 특수문자 _!@#$%^만 사용할 수 있습니다.",
            trueOrfalse:false
        }
    ]

    let lastCheck = false;

    // 유효성 검사 시작
    userCheck.forEach(function(item,index){
        item.addEventListener("keyup",function(){
            let value = item.value;
            let checkResult = checkList[index].regexCheck.test(value);

            if(checkResult){
                showResult[index].innerText = checkList[index].correct;
                showResult[index].style.color = "green";
                checkList[index].trueOrfalse = true;
            }
            else {
                showResult[index].innerText = checkList[index].wrong;
                showResult[index].style.color = "red";
                checkList[index].trueOrfalse = false;
            }
        });
    });

    completeBtn.addEventListener("click",function(e){
        // 페이지 이동 방지
        e.preventDefault();

        lastCheck = checkList.every(element => element.trueOrfalse == true);
        // every함수로 해당 값이 trueOrfalse의 값들이 전부 true라면 lastCheck도 true / 하나라도 false라면 lastCheck는 false
        console.log(lastCheck);

        // true
        if (lastCheck) {
            alert("다음화면으로 넘어갑니다.");
        }
        // false
        else {
            alert("필수입력사항을 다시 체크해보세요.");
        }
    });