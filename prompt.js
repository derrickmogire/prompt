let buttonNo=document.getElementById("No")
console.log(buttonNo)
buttonNo.addEventListener("mouseover",(e)=>{
    let random=Math.random()*100
    let random2=Math.random()*100
buttonNo.style.position="absolute"
buttonNo.style.top=`${random}px`

buttonNo.style.right=`${random2}px`
})
let buttoYes=document.getElementById("Yes")
buttoYes.addEventListener("click",(e)=>{
    alert('i knew it!')
})