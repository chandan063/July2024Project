let btn=document.getElementById("btn");
let show=document.getElementById("show");

btn.addEventListener("click",add)
function add(){
    console.log("Clicked")
    let box=document.createElement('textarea');
    box.style.border='2px solid black';
    box.style.width='300px';
    box.style.height='300px';
    show.append(box);
    let submit=document.createElement("button");
    submit.textContent="Submit"
    submit.classList="btn";
    
    show.after(submit);

    btn.removeEventListener("click",add);
}