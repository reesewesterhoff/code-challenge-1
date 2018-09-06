
$(document).ready(onReady);

function onReady(){
    $('#generateButton').on('click', appendDiv);
    $(document).on('click', '#swapButton', toggleColor);
    $(document).on('click', '#deleteButton', deleteDiv);
}

totalClicks = 0;

function appendDiv(){
    totalClicks++;
    console.log('in appendDiv');
    $('body').append(`<div class="color">
    <p>` + totalClicks + `</p>
    <button id="swapButton">Swap</button>
    <button id="deleteButton">Delete</button>
    </div>`);
    
}

function toggleColor(){
    $(this).parent('div').toggleClass('change');
}

function deleteDiv(){
    $(this).closest('div').remove();
    
}