// Input height element
const gridHeightEl = document.getElementById("inputHeight");
// Input width element
const gridWidthEl = document.getElementById("inputWidth");
// Submit element
const submitEl = document.getElementById("submitInput");
// Color picker element
const colorPickerEl = document.getElementById("colorPicker");
// Table element
const tableEl = document.getElementById("pixelCanvas");

// Add an event listener to the submit Query input
// so as to call makeGrid method
submitEl.addEventListener('click', (e) => {
    // Prevent the form from default acton
    e.preventDefault();
    // Remove all previous element in the table element
    tableEl.replaceChildren("");
    // Call the makeGrid function
    makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Get the height and width of the grid
    const heightOfGrid = gridHeightEl.value;
    const widthOfGrid = gridWidthEl.value;

    // Construct the grid
    for(let a = 0; a < heightOfGrid; a++) {
        // Create a table row element
        const tr = document.createElement('tr');
        // Add a class name of container to the table row
        tr.classList.add('container');

        // For the individual squares
        for(let b = 0; b < widthOfGrid; b++) {
            // Create a table data element
            const td = document.createElement('td');
            // Add a class of square to the table data
            td.classList.add('square');
            // Append the table data element to the table row element
            tr.appendChild(td);
        }
        // Add an event delegation to the table row
        tr.addEventListener(
            'click',
            function(e)
            {
                // Check if the target of the table row contains a class
                // of square
                if(e.target.classList.contains('square')){
                    // If true, set the background color of the target
                    // to the value of the color picker element
                    e.target.style.backgroundColor = colorPickerEl.value;
                }
            });
        
        // Append the table row to the table element
        tableEl.appendChild(tr);
    }
    
}
