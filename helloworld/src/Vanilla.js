// case 0, if no root element create root element

if(document.getElementById("root") == null){
    let root = document.createElement("div");
    root.setAttribute("id","root")
    document.body.append(root);
}

// case 1, grab root element
root = document.getElementById("root");

// case 2, append new element
let newElement = document.createElement("div");
newElement.setAttribute("class", "container");
newElement.textContent = "Hello World";
root.append(newElement);