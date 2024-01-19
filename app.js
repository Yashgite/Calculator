const equal = document.getElementsByClassName(".equal");
let claci = document.querySelectorAll("input.equal");
let display = document.getElementsByClassName(".display");


equal.addEventListener("click",()=>{
    try{
            display.value = eval(display.value);
        }catch(error){
            console.error("error");
                  }
})
