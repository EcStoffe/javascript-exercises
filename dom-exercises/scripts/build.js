/*let header = document.createElement("H1");
let paragraph = document.createElement("P");
let myDiv = document.createElement("div");
let myImg = document.createElement("img");

let text = document.createTextNode("This is the paragraph I just created via JS");
let t = document.createTextNode("This is the header");

myImg.setAttribute("src", "https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_1280.jpg");
myImg.setAttribute("height", "600");
myImg.setAttribute("width", "800");

document.body.appendChild(paragraph);
myDiv.appendChild(header);
myDiv.appendChild(paragraph);
myDiv.appendChild(myImg);
paragraph.appendChild(text);
header.appendChild(t);*/



let myBody = document.getElementsByTagName("body")[0];

let myDiv2 = document.createElement("div");
myDiv2.innerHTML = "<h1>This is the header</h1><p>This is the paragraph</p><img src='https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_1280.jpg' alt='a tree'>"

myBody.appendChild(myDiv2);


