// get values for selected answers
// count all the As, Bs, and Cs selected
// determine which group has the most (or tie)
// display the proper response(s) for the coding language(s) chosen

// business logic



// user interface logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()
    const answer1 = $("input:radio[name=answer1]:checked").val();
    const answer2 = $("input:radio[name=answer2]:checked").val();
    const answer3 = $("input:radio[name=answer3]:checked").val();
    const answer4 = $("input:radio[name=answer4]:checked").val();
    const answer5 = $("input:radio[name=answer5]:checked").val();
    console.log(answer1, answer2, answer3, answer4, answer5);
  });
});