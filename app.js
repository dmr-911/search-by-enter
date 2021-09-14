var search = document.getElementById("search");
var input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
//   event.preventDefault();
    if (event.code == 'Enter') {
        search.click();
        input.value = '';
  } 
});
