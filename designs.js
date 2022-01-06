// Select color input
// Select size input
var span, height, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    //store input values for the span and height of the grid
    span = $('#inputWidth').val();
    height = $('#inputHeight').val();
    makeGrid(span, height);
})

function makeGrid(row, col) {
    //clear any existing table
    $('tr').remove();

    //  Your code goes  here!

    // Loop and add table rows
    for (var a = 1; a <= row; a++ ) {
        $('#pixelCanvas').append('<tr id= grid' + a + '></tr>');
        // Loop and add table cells
        for (var b = 1; b <= col;  b++){
            $('#grid' +a).append('<td></td>');
        }
    }

    //add color to cell

    //add Click Event
    $('td').click(function addColor() {
        //store color value
        paint = $('#colorPicker').val();

        //code to remove any existing style and add background color to cells.
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + paint);
        }
    })
}