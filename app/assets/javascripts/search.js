function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("name");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  if(filter.length >1){
  for (i = 0; i < tr.length; i++) {
    // firstname field
    td = tr[i].getElementsByTagName("td")[1];
    //lastname field
    td2 = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }

}
else{
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        tr[i].style.display = "";
    }       
  }
}
}