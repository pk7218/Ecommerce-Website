$(document).ready(function()
{
  $("#navbrand").hide();
  $("#navhome").hide();
  $("#navmen").hide();
  $("#navwomen").hide();
  $("#navtech").hide();
  $('.toggler').hide();
  

  $("#brands").hover(function(){
    // $("#navbrand").hide();
    $("#navhome").hide();
    $("#navmen").hide();
    $("#navwomen").hide();
    $("#navtech").hide();
      $("#navbrand").show();
      $(this).css({color:"red"});
    },function(){$("#navbrand").show();
    $(this).css({color:"#FFFFFF"});});
    
// hide show navbar
$("#tech").hover(function(){

  $("#navbrand").hide();
  $("#navhome").hide();
  $("#navmen").hide();
  $("#navwomen").hide();
  // $("#navtech").hide();
  $("#navtech").show();
$(this).css({color:"red"});
},function(){$("#navtech").show();
$(this).css({color:"#FFFFFF"});});

$("#home").hover(function(){
  $("#navbrand").hide();
  // $("#navhome").hide();
  $("#navmen").hide();
  $("#navwomen").hide();
  $("#navtech").hide();
  $("#navhome").show();
$(this).css({color:"red"});
},
function()
{
$("#navhome").show();
$(this).css({color:"#FFFFFF"});
});

$("#men").hover(function(){

  $("#navbrand").hide();
  $("#navhome").hide();
  // $("#navmen").hide();
  $("#navwomen").hide();
  $("#navtech").hide();
  $("#navmen").show();
$(this).css({color:"red"});
},function(){$("#navmen").show();
$(this).css({color:"#FFFFFF"});});

$("#women").hover(function(){
  $("#navbrand").hide();
  $("#navhome").hide();
  $("#navmen").hide();
  // $("#navwomen").hide();
  $("#navtech").hide();
  $("#navwomen").show();
$(this).css({color:"red"});
},function(){$("#navwomen").show();
$(this).css({color:"#FFFFFF"});});


// click function
$("#men").click(function(){

  $("#navbrand").hide();
  $("#navhome").hide();
  // $("#navmen").hide();
  $("#navwomen").hide();
  $("#navtech").hide();
  $("#navmen").show();
$(this).css({color:"red"});
},function(){$("#navmen").show();
$(this).css({color:"#FFFFFF"});});

$("#women").onclick(function(){
  $("#navbrand").hide();
  $("#navhome").hide();
  $("#navmen").hide();
  // $("#navwomen").hide();
  $("#navtech").hide();
  $("#navwomen").show();
$(this).css({color:"red"});
},function(){$("#navwomen").show();
$(this).css({color:"#FFFFFF"});});

$("#home").click(function(){
  $("#navbrand").hide();
  // $("#navhome").hide();
  $("#navmen").hide();
  $("#navwomen").hide();
  $("#navtech").hide();
  $("#navhome").show();
$(this).css({color:"red"});
},
function()
{
$("#navhome").show();
$(this).css({color:"#FFFFFF"});
});

$("#tech").hover(function(){

  $("#navbrand").hide();
  $("#navhome").hide(); 
  $("#navmen").hide();
  $("#navwomen").hide();
  // $("#navtech").hide();
  $("#navtech").show();
$(this).css({color:"red"});
},function(){$("#navtech").show();
$(this).css({color:"#FFFFFF"});});

// $( function() {


//   var state = true;
//   $( "#button" ).on( "click", function() {
//     $('.toggler').show();
//     if ( state ) {
//       $( "#effect" ).animate({
//         backgroundColor: "#aa0000",
//         color: "#fff",
//         width: 400
//       }, 1000 );
//     } else {
//       $( "#effect" ).animate({
//         backgroundColor: "#fff",
//         color: "#000",
//         width: 240
//       }, 1000 );
//     }
//     state = !state;
//     $('.toggler').show();
//   });
// } );





// $( "#button" ).click(function() {
 
// });
var cartnum;
document.querySelectorAll('.add-cart').click(function()
{
   cartnum+=1;

  document.querySelector('#cart').innerHTML=cartnum;

});


});



