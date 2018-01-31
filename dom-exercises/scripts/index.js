/*function init() {
    about = document.getElementById("about");
    about.style.color = 'blue';
    about.style.fontSize = '28px';
}*/

/*let myButton = document.getElementById('submit')

myButton.addEventListener('click', function(e) {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');

    console.log("Name: ", firstName.value, lastName.value)
});*/


/*let myButton = document.getElementById('submit')

myButton.addEventListener('click', function (e) {
    let myObject = document.getElementById("myHref");

    let hrefLang = myObject.getAttribute("hreflang");
    let href = myObject.getAttribute("href");
    let target = myObject.getAttribute("target");
    let myHref = myObject.getAttribute("id");

    console.log(href, hrefLang, target, myHref);
});*/

/*let myTable = document.getElementById("myTable");
let addRow = document.getElementById("addRow");
let delRow = document.getElementById("delRow");

addRow.addEventListener("click", function (e) {
    let row = myTable.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = "Tilda";
    cell2.innerHTML = "Andersson";
    cell3.innerHTML = "52";
})

delRow.addEventListener("click", function (e) {
    let row = myTable.deleteRow(1);
})*/


/* function myfunction () {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("screensize").innerHTML = txt;
    console.log("Is iz working")
    window.addEventListener("resize", myfunction)
}

myfunction();*/

let input = document.getElementById("myText");
let value = input.getAttribute("value");

myText.addEventListener("keyup", function () {
    console.clear();
    console.log(myText.value);
    console.log(value);
})