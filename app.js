//console.log("this is working");

const inp = document.querySelector(".input");
const btn = document.querySelector(".btn");
const op = document.querySelector(".output-para");

btn.addEventListener("click",()=>{
    console.log(inp.value);
    
    const temp = inp.value;
    
    if(temp == "abdul ahad" || temp == "Abdul Ahad")
    {
        op.innerHTML = "yo! you know my correct name man";
    }
    else{
        op.innerHTML = "nah!!!  I was wrong about you man";
    }

})