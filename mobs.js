function myFunction() {
  // Declare variables
  var input, filter, ul, p, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  p = ul.getElementsByTagName('p');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < p.length; i++) {
    a = p[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = "";
    } else {
      p[i].style.display = "none";
    }
  }
}