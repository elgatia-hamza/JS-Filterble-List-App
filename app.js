// Get Input Filter
const filterInput = document.getElementById('filter-input');

// Add Event to  filter input
filterInput.addEventListener('keyup', filterNames);


function filterNames() {
    // Get value of filter input
    let filterValue = document.getElementById('filter-input').value.toUpperCase();

    // Get ul names
    const ul = document.getElementById('names');

    // Get lis from ul
    const li = document.querySelectorAll('li.collection-item');

    // loop through collection-item lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if match
        if(a.innerHTML.toUpperCase().indexOf(filterValue) == -1){
            li[i].style.display = 'none';
        }else{
            li[i].style.display = '';
        }
    }

}