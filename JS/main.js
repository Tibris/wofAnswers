let searchBar,
    categories,
     filters, 
     i, 
     j, 
     a, 
     txtValue,
     noResults;

let noResultsDiv = document.getElementById("no-results-div");
let categoriesDiv = document.getElementsByClassName("all-categories")[0];
let anchors = categoriesDiv.getElementsByTagName("a");

searchBar = document.getElementById("search-categories");
categories = document.getElementsByClassName("flex-item");
filters = document.getElementById("search-categories").value.toUpperCase();

searchBar.onkeyup = function searchFilter() {
    for (i = 0; i < categories.length; i++) {
        a = categories[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(document.getElementById("search-categories").value.toUpperCase()) > -1) {
            categories[i].style.display = "";
        }
        else {
            categories[i].style.display = "none";
        }
        
    }
}
