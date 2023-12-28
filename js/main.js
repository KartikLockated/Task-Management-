//  alert("hi")
function openNav() {
  
    document.getElementById("mySidebar").style.width = "15em";
    document.getElementById("main").style.marginLeft = "15em"; 
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  } 

  
// filter popup 
   
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
 
// asset creation asset allocation department selection
  
function showDropInfo() {  
  var sT = dropForm.dropSelect;  
   const node = document.createElement("p");     
   node.classList.add('selected-count');
   node.innerHTML =sT[sT.selectedIndex].text;
   //alert(sT[sT.selectedIndex].text) 
   document.getElementById("selected-items").appendChild(node);
}


//generate row for inward create also included on original page 

$(document).ready(function () {
  // Denotes total number of rows
  var rowIdx = 0;

  // jQuery button click event to add a row
  $("#addBtn").on("click", function () {
    // Adding a row inside the tbody.
    $("#tbody").append(`<tr id="R${++rowIdx}">
<td class="row-index text-center">
<p>${rowIdx}</p>
</td>
<td><input class="border" type="text" placeholder="Asset Name" /></td>
<td><input class="border" type="text" placeholder="Asset Serial No." /></td>
<td><input class="border" type="text" placeholder="Asset Model No." /></td>
<td> <select class="form-select btn-sm text-white" aria-label="Default select example"
    style="background-color:#01C875 ;">              
      <option selected style="background-color:#01C875 ;">In Use</option>
      <option value="1"  style="background-color:#E2445B ;">Breakdown</option>
      <option value="2" style="background-color:#E95420;">In Store</option>
      <option value="3" style="background-color:#71222E;">Missing</option>
                </select></td>
<td class="text-center">
  <span class="cancel-txt remove">X</span>
  </td>                                   
</tr>`);
  });

  // jQuery button click event to remove a row.
  $("#tbody").on("click", ".remove", function () {
    // Getting all the rows next to the row
    // containing the clicked button
    var child = $(this).closest("tr").nextAll();

    // Iterating across all the rows
    // obtained to change the index
    child.each(function () {
      // Getting <tr> id.
      var id = $(this).attr("id");

      // Getting the <p> inside the .row-index class.
      var idx = $(this).children(".row-index").children("p");

      // Gets the row number from <tr> id.
      var dig = parseInt(id.substring(1));

      // Modifying row index.
      idx.html(` ${dig - 1}`);

      // Modifying row id.
      $(this).attr("id", `R${dig - 1}`);
    });

    // Removing the current row.
    $(this).closest("tr").remove();

    // Decreasing total number of rows by 1.
    rowIdx--;
  });






});
  