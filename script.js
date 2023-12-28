const button = document.getElementById('Ai-Friend')
const idnum = document.getElementById('id-num')
const advice = document.getElementById('advice')


 getrandomadvice = ()=>{

    advice.textContent = 'Loading...';

    fetch('https://api.adviceslip.com/advice')
    .then((res)=> res.json())
    .then((data)=> data.slip)
    .then((data)=>{
        idnum.textContent = data.id;
        advice.textContent = data.advice;

    })
    .catch((err)=> console.log(err))
}
window.onload = getrandomadvice;

button.addEventListener('click',()=>{
    console.log('btn clicked')
    getrandomadvice();
});