
// document.addEventListener('DOMContentLoaded', function (event) {
//     // using DOM 
//     var box = document.querySelector('.well');
//     var hideBtn = document.querySelector('.btn-danger');
//     var showBtn = document.querySelector('.btn-primary');

//     hideBtn.addEventListener('click', function (event) {
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (event) {
//         box.style.display = '';
//     });

// });


//--------------------------------------------------------------

$(document).ready(function () {

    var $box = $('.well');

    // $('#my-box').click(function () { 
    //     console.log('#my-box click handler..');
    // });

    // $('.btn-danger').click(function (event) {
    //     //$('.well').hide(5000);
    //     $box.slideUp();
    //     //event.stopPropagation();
    // });
    // $('.btn-primary').click(function (event) {
    //     // $('.well').show(5000);
    //     $box.slideDown();
    //     //event.stopPropagation();
    // });

    //------------------------------------------------

    // Event Delegation

    $('#my-box').on('click', '.btn', function () {
        console.log('handler..');
        $box.toggle();
    })

    //------------------------------------------------

});