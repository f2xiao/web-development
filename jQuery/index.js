$(document).keydown(function(event){
  $("h1").text(event.key);
})
$("h1").before("<button>new</button>");
