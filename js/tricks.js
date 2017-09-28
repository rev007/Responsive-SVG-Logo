// $(function() {
//   $('.big_pic').attr('src', 'http://lorempixel.com/350/150/animals/');
// })

function pizza() {
  console.log('free pizza!');
};

$( window ).resize(function() {
  // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );


  console.log('crazy window!');
  // pizza();
});

function goLogo() {
};

function hi() {
  if($(window).width() <= 320) {
    console.log('whacky window!');
  }
};

// $(function() {
//   if($(window).width() <= 310) {
//     $("img").each(function() {
//       $(this).attr("src", $(this).attr("src").replace("images/620x410/", "images/310x205/"));
//     });
//   }
// });
