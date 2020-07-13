var input = document.querySelector("#name");
var input2 = document.getElementById("number");
var button = document.querySelector(".btn-success");

button.addEventListener("click", function () {
  var phoneBook = { };
    phoneBook.Name = input.value;
    phoneBook.Number = input2.value;
  var stored =[];
  if(localStorage.phoneBook){
    stored = JSON.parse(localStorage.phoneBook);
  }
  stored.push(phoneBook);
  localStorage.phoneBook = JSON.stringify(stored);
  // stored = localStorage.setItem("name", JSON.stringify(phoneBook));
  
  var result = localStorage.getItem("name");
  var table = document.querySelector("tbody");
   table.innerHTML = '';
 for (var i = 0; i<stored.length; i++){
   

   var trow = `
                            <td>${stored[i].Name}</td>
                            <td>${stored[i].Number}</td>`; 
             var row = table.insertRow();
             row.innerHTML = trow;
 }

});
var load = document.querySelector("btn-dark");
load.addEventListener("click", function(){
  if (localStorage.phoneBook){
    
  }
})