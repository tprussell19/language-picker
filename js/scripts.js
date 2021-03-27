// get values for selected answers
// count all the As, Bs, and Cs selected
// determine which group has the most (or tie)
// display the proper response(s) for the coding language(s) chosen



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()
    const answer1 = $("input:radio[name=answer1]:checked").val();
    const answer2 = $("input:radio[name=answer2]:checked").val();
    const answer3 = $("input:radio[name=answer3]:checked").val();
    const answer4 = $("input:radio[name=answer4]:checked").val();
    const answer5 = $("input:radio[name=answer5]:checked").val();
    console.log(answer1, answer2, answer3, answer4, answer5);

    let pyhtonAnswer = 0;
    let cSharpAnswer = 0;
    let rubyAnswer = 0;
    
    if (answer1 === "option1") {
      pyhtonAnswer = pyhtonAnswer + 1;
    } else if (answer1 === "option2") {
      cSharpAnswer = cSharpAnswer + 1;
    } else if (answer1 === "option3") {
      rubyAnswer = rubyAnswer + 1;
    }
    if (answer2 === "option1") {
      pyhtonAnswer = pyhtonAnswer + 1;
    } else if (answer2 === "option2") {
      cSharpAnswer = cSharpAnswer + 1;
    } else if (answer2 === "option3") {
      rubyAnswer = rubyAnswer + 1;
    }
    if (answer3 === "option1") {
      pyhtonAnswer = pyhtonAnswer + 1;
    } else if (answer3 === "option2") {
      cSharpAnswer = cSharpAnswer + 1;
    } else if (answer3 === "option3") {
      rubyAnswer = rubyAnswer + 1;
    }
    if (answer4 === "option1") {
      pyhtonAnswer = pyhtonAnswer + 1;
    } else if (answer4 === "option2") {
      cSharpAnswer = cSharpAnswer + 1;
    } else if (answer4 === "option3") {
      rubyAnswer = rubyAnswer + 1;
    }
    if (answer5 === "option1") {
      pyhtonAnswer = pyhtonAnswer + 1;
    } else if (answer5 === "option2") {
      cSharpAnswer = cSharpAnswer + 1;
    } else if (answer5 === "option3") {
      rubyAnswer = rubyAnswer + 1;
    }
    console.log(pyhtonAnswer, cSharpAnswer, rubyAnswer);

    $("#result").show();
    $("#language-description").show();
    if (pyhtonAnswer >= 2) {
      $("#python").show();
    } else {
      $("#python").hide();
    }
    if (cSharpAnswer >= 2) {
      $("#cSharp").show();
    } else {
      $("#cSharp").hide();
    }
    if (rubyAnswer >= 2) {
      $("#ruby").show();
    } else {
      $("#ruby").hide();
    }
  });
});