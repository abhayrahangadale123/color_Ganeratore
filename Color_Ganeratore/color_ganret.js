


const getColor = () =>{
    const randomNumber = Math.floor( Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    
    
    const colorCode =  document.getElementById("color-code").innerHTML = randomCode;

    //copy click krte hi "randomcode = #ffff"
    navigator.clipboard.writeText(randomCode)
    
}
//event call
const btn =  document.getElementById("btn").addEventListener("click",getColor)


//init call
getColor();