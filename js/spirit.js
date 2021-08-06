const spiritSpan1 = document.querySelector(".spirit span");
const spiritSpan2 = document.querySelector(".spirit span:nth-child(2)");
const spirit = [
    {spirit : "너와 나는 다르다는 걸 인정하자",
    autor : "쫑"},
    {spirit : "솔직하지만 부드럽게",
    autor : "최종하"},
    {spirit : "하고 싶은 것에 열정을 가져보자",
    autor :  "종하"},
    {spirit : "행복이란 무엇일지 계속 생각하자",
    autor : "쫑가"} ,
    {spirit : "몸은 피곤해져도 말은 부드럽게",
    autor : "킹종"},
];
const todaySpirit = spirit[Math.floor(Math.random() * spirit.length)];

spiritSpan1.innerText = todaySpirit.spirit;
spiritSpan2.innerText = todaySpirit.autor;

