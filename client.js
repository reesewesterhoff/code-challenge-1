
$(document).ready(onReady);

function onReady(){
    $('#generateButton').on('click', appendDiv);
    $(document).on('click', '#swapButton', toggleColor);
    $(document).on('click', '#deleteButton', deleteDiv);
}

totalClicks = 1;

function appendDiv(){
    console.log('in appendDiv');
    $('body').append(`<div class="color">
    <p>` + totalClicks + `</p>
    <button id="swapButton">Swap</button>
    <button id="deleteButton">Delete</button>
    </div>`);
    totalClicks++;
}

function toggleColor(){
    $('.color').closest('div').toggleClass('change');
    // having trouble targeting just one div to change color
}

function deleteDiv(){
    $(this).closest('div').remove();
    
}