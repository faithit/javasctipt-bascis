function btnclick(){
    alert("hello you clicked a button");
}
 function bdload(){
    alert("the body has loaded")
 }
 //addeventlistener
 //elememt.addeventlistener(event,function)

    const ly=document.querySelector(".btn");
    ly.addEventListener("click",myfunction)
    ly.addEventListener("mouseover",mysdfunction)

    function myfunction(){
        alert("hello")
    }
    function mysdfunction(){
        ly.style.backgroundColor="red";
    }
    //getting the element
    const btntwo=document.querySelector(".one")
    //addeventListener
    btntwo.addEventListener("click",thirdfunction)
    btntwo.addEventListener("mouseout",fouthfunction)
    btntwo.addEventListener("mouseover",lastfunction )

    function thirdfunction(){
    btntwo.style.backgroundColor="yellow"
    }

    function fouthfunction(){
    btntwo.innerHTML="mouse out"
    }

    function lastfunction(){
        btntwo.innerHTML="MOUSE OVER"
    }