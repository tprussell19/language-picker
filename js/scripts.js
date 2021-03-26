// Business Logic
// count all the As, Bs, and Cs selected
// determine which group has the most (or tie)
// display the proper response(s) for the coding language(s) chosen

function responseTotals() {
  if (As > Bs && As > Cs) {
    result = "#python"
  };
};

// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let result;
    let answerA = $("#a").checked;
    let answerB = $(".b").checked;
    let answerC = $(".c").checked;
    let As = 0;
    let Bs = 0;
    let Cs = 0;

    if (answerA === true) {
      As += 1;
    } else if (answerB === true) {
      Bs += 1;
    } else if (answerC === true) {
      Cs += 1;
    }
console.log("As are equal to: " + As);
    // put the suggested language in the .language span
    $(".language").text(result);

    // display the #suggested-language div
    $("#suggested-language").show();
  });
});