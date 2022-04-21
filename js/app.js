let keypad = document.querySelector('.keypad');
let displaybox = document.querySelector('.display');
let current = displaybox.innerText;
let operator = ["+", "-", "*", "/", "=", "%"];
let filterForDisplay = x => {
    let current = displaybox.innerText;
    let operator = ["+", "-", "*", "/", "=", "%"];

    if (current == "0" && x != ".") {
        clearlast();
    }
    if (operator.includes(x) && operator.includes(current[current.length - 1])) {
        return false;
    }
    if (current.length > 19) {
        return false;
    }
    return true;
};


let filterForCalculate = _ => {
    let c = displaybox.innerText;
    if (operator.includes(c[c.length - 1]) || operator.includes(c[0])) {
        return false;
    }
    return true;
}

let showInDisplay = (x) => {
    if (displaybox.innerText.length > 11) {
        displaybox.classList.add("fs");
    }
    if (filterForDisplay(x)) {
        displaybox.innerText += x;
    }


}

let calc = () => {
    if (filterForCalculate()) {
        displaybox.innerText = eval(displaybox.innerText);
    }
}

let clearall = _ => {
    displaybox.innerText = "";
    displaybox.classList.remove("fs")
};

let clearlast = _ => {
    displaybox.innerText = displaybox.innerText.substring(0, displaybox.innerText.length - 1);
};
