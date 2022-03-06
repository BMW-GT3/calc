const body = document.getElementById("calculator");
const display = document.getElementById("display");

class Button {
    constructor(text, callback) {
  if (!callback) {
   callback = () => {
    if (display.innerText == "ERROR")
     display.innerText = "";
    
    display.innerText += text;
   }
  }
  
  this.element = document.createElement("div");
  this.element.classList.add("button");
  this.element.setAttribute("text", text);
  this.element.addEventListener("click", callback);
    }
    
    create() {
  body.appendChild(this.element);
    }
}

function calculate() {
    let result = "";
    
    try {
  if (display.innerText.length > 0)
   result = eval(display.innerText);
    } catch {
  result = "ERROR";
    }
    
    display.innerText = result;
}

function backspace() {
    if (display.innerText.length > 0) {
  display.innerText =
   display.innerText.substring(0, display.innerText.length - 1);
    }
}

function power(action) {
    if (action) {
  display.innerText = ""

  display.classList.remove("off");
    } else {
  setTimeout(() => display.innerText = "", 200);
  
  display.classList.add("off");
    }
}

[
    new Button("=", calculate),
    new Button("←", backspace),
    new Button("on", () => power(true)),
    new Button("off", () => power(false)),
    new Button(7), new Button(8), new Button(9), new Button("*"),
    new Button(4), new Button(5), new Button(6), new Button("/"),
    new Button(1), new Button(2), new Button(3), new Button("-"),
    new Button(0), new Button("("), new Button(")"), new Button("+"),
].forEach((button, i) => {
    button.create();
    
    if ((i + 1) % 4 == 0)
  body.appendChild(document.createElement("br"));
});