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

  // var result = localStorage.getItem("name");
  var table = document.querySelector("tbody");
   table.innerHTML = '';
 for (var i = 0; i<stored.length; i++){
console.log(stored);

   var trow = `
                            <td>${stored[i].Name}</td>
                            <td>${stored[i].Number}</td>`; 
             var row = table.insertRow();
             row.innerHTML = trow;
 }

});



// var load = document.querySelector(".btn-dark");
// load.addEventListener("click", function(){ 
//   var trow = `<td>${stored[i].Name}</td> 
//               <td>${stored[i].Number}</td>`;
//   var row = table.insertRow();
//   row.innerHTML = trow;
//   if (!localStorage.phoneBook){
//     console.log("good");
//     trow = "";
//   } else {
//     console.log("good");
//   }
// })