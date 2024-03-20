window.onload = ()=> {
    const buttons =document.querySelectorAll('.numbers'); //button se number ko fetch krna h ,...all sari buttons k liye 
    const screen = document.querySelector('.screen'); //input screen pr data fetch krne k liye 
    const equals =document.querySelector('#btn-equals');
    const clear= document.querySelector('#btn-clear');
    
    //sari button ko loop krege
    buttons.forEach(buttons => {      
        buttons.addEventListener('click',(e)=>{
        screen.value += e.target.innerHTML;  //Screen pr value show kre + for add more no.
        });
    })
    equals.addEventListener('click',(e)=>
    {
        if(!screen.value){
            screen.value="Enter value"
        }else{
            screen.value= eval(screen.value); // eval func. for result of maths
        }
    })
    clear.addEventListener('click',()=>{
        screen.value="";
    })
}