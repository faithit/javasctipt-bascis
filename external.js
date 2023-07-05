//getelementbyid
const abc=document.getElementById("one");
abc.style.color="red";
//getelementsbyclassname

const xyz=document.getElementsByClassName("hello");
//xyz[0].style.color="blue";
for(i=0;i<xyz.length;i++){
    xyz[i].style.color="yellow";
}
//getelementsbytagname

const st=document.getElementsByTagName("h1")[0];
st.style.backgroundColor="blue";
//queryselector
const x=document.querySelector("#two");
x.style.color="purpl(e";
//queryselectorall
const y=document.querySelectorAll(".b")[0];
y.style.backgroundColor="maroon";
//creating a div element
const dov=document.createElement("div")
document.body.appendChild(dov);
//creating an h2 element
const xy=document.createElement("h2");
xy.innerText=("hello world");
//adding the element
document.getElementById("mydiv").appendChild(xy);
//removing the  div element
document.body.removeChild(dov);
//modifying element attribute
document.getElementById("is").setAttribute("type","password");
//innerHTML
const px=document.createElement("p");
px.innerHTML="hello";
document.body.appendChild(px);
+
console.log(st);
console.log(st.innerText);
console.log(st.innerHTML)


