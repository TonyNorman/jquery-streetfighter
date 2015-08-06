$(document).ready(function() {



 $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    // alert('hello');




  });

 $('.ryu') .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    // playHadouken();
  });

    $('.ryu').mousedown(function() {    
     // play hadouken sound
     playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
     {'left': '1020px'},
     500,
     function() {
       $(this).hide();
       $(this).css('left', '520px');
  }
);
    // animate hadouken to the right of the screen
  })

 $('.ryu').mouseup(function() {

    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // ryu goes back to his ready position
  });

 
// $(this).keydown(function(event){
//      event.preventDefault();
//      if(event.keyCode===88){
//       playHadouken();
//        $('.ryu-ready').hide();
//       $('.ryu-throwing').show();
//       $('.hadouken').show().animate(
//         {'left': '1020px'},
//         500,
//         function() {
//          $('.ryu-throwing').hide();
//          // $('.hadouken').css('left', '520px');
//          $('.hadouken').hide();
//          $('.ryu-ready').show();  
//      });
//     }

// });

  $('.ryu').keydown(function(event){
   if (event.keyCode===88) {

      $('ryu-ready').hide();
      $('ryu-cool').show();
     }


     });















});

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}