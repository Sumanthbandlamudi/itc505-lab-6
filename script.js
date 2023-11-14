function calculate() {
  // Get the value entered by the user
  var inputValue = document.getElementById("numberInput").value;

  // Perform any calculation or operation with the input value
  var result = inputValue * 2; // For example, doubling the input value

  // Display the result in the paragraph element
  document.getElementById("result").innerHTML = "Result: " + result;
}