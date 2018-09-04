console.log('js');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#generateButton').on('click', appendDiv);
    $('swapButton').on('click', toggleColor);
}

totalClicks = 0;

function appendDiv(){
    console.log('in appendDiv');
    $('body').append(`<div>
    <p>` + totalClicks + `</p>
    <button id="swapButton">Swap</button>
    <button id="deleteButton">Delete</button>
    </div>`);
    totalClicks++;
}

function toggleColor(){
    console.log('in toggle color');
    
}