// function box1() {
//     let eiv= document.getElementById("box1");
//     eiv.style.color="blue";
//     eiv.innerHTML += "Welcome!";
//     eiv.innerHTML= "Welcome to Geeks for Geeks";
// }

// function box2(){
//     var para=document.getElementById("box2").querySelectorAll("p");
//     for(let i=0;i<para.length;i++){
//     para[i].style.backgroundColor="green";
//     para[i].style.color="white";
//     }
// }


// document.getElementById("try").addEventListener("click",function() {
//     document.getElementById("text").innerText = "Geeks for Geeks";
// })


// const x = document.getElementById("clickIt");
// const y = document.getElementById("hoverPara");

// x.addEventListener("click", RespondClick);
// y.addEventListener("mouseover", RespondMouseOver);
// y.addEventListener("mouseout", RespondMouseOut);

// function RespondMouseOver() {
//     document.getElementById("effect").innerHTML +="MouseOver Event" + "<br>";
//     }

//     function RespondMouseOut() {
//         document.getElementById("effect").innerHTML +="MouseOut Event" + "<br>";
//     }

//     function RespondClick() {
//         document.getElementById("effect").innerHTML +="Click Event" + "<br>";
//     }


// document.getElementById("inner").addEventListener("click", function () {
//     alert("Inner Button Clicked");
// },false);

// document.getElementById("outer").addEventListener("click", function () {
//     alert("Outer Button Clicked");
// }, false);

// document.getElementById("child").addEventListener("mouseover", function () {
//     alert("Child Button Hovered");
// }, false);


const container = document.getElementById("list");
const ul = document.createElement("ul");

for (let i = 0; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "This is list item " + i;
    ul.appendChild(li);
}

ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        alert("You clicked on: " + event.target.textContent);
        console.log("Clicked on list item:", event.target.textContent);
        event.target.style.color = "red"; // Change color of clicked item
    }
});
    container.appendChild(ul);
