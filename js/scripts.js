// get values for selected answers
// count all the As, Bs, and Cs selected
// determine which group has the most (or tie)
// display the proper response(s) for the coding language(s) chosen

$(document).ready(function() {
  $(".q1").click(function(event) {
    const answer1 = event.target.id;
    console.log(answer1);
    
  }); 
});