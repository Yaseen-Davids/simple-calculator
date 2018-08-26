dragElement(document.getElementById("calculator"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Declare input
let calNumber = document.getElementById("calculations");

// Declare all operations input
let allCalculations = document.getElementById("allCalculations");

// button function which gets button data values
function calculator(number){

  // Declare attribute
  let btnVal = number.getAttribute("data-btn-value");

  // If input is equal to zero and not empty add number to input
  if (calNumber.value == "0" && calNumber.value != null){
    calNumber.value = btnVal;
  }

  else{
    calNumber.value += btnVal;
  }

}

// Get math operation value
function operation_val(math){

  if (calNumber.value == null || calNumber.value == ""){
    return;
  }

  else{
    let mathVal = math.getAttribute("data-btn-operation");

    allCalculations.value += calNumber.value + mathVal;
    calNumber.value = "0";
  }

}

// Get sum of equation
function equal_val(){

  allCalculations.value = allCalculations.value + calNumber.value;

  calNumber.value = eval(allCalculations.value);
  allCalculations.value = "";

}

// Clear math input
function clearInput(){

  // Input equal to zero
  calNumber.value = "0";

}

// Clear all operations input and math input
function clearCalculator(){

  calNumber.value = "0";
  allCalculations.value = "";

}

// Go back one value
function backspace(){

  let length = calNumber.value.length;
  length--;

  calNumber.value = calNumber.value.substring(0, length);

}