document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next_btn");
    const userIdInput = document.querySelector("input[name='user_id']");
    
    nextBtn.addEventListener("click", function () {
        const userId = userIdInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 형식 정규식
        const phonePattern = /^\d{10,11}$/; // 10~11자리 숫자로 이루어진 전화번호 정규식
        
        if (userId === "") {
            alert("이메일 또는 휴대전화를 입력하세요.");
        } else if (!emailPattern.test(userId) && !phonePattern.test(userId)) {
            alert("올바른 이메일 또는 전화번호 형식을 입력하세요.");
        } else {
            window.location.href = "next.html"; // 다음 화면으로 이동
        }
    });
});

