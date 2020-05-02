function submitItem() {
  var x, y, name, a, b, answer;
  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');
  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = 'rgb(113, 156, 96)';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
    document.getElementById("inputReset").value = "";
  }
}