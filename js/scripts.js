var getTrack = function(answerSum) {
  // return track based on which range answerSum falls
  if (answerSum > 200) {
    return "Java"
  } else if (answerSum > 100) {
    return "NET"
  } else if (answerSum > 90) {
    return "PHP"
  } else if (answerSum > 80) {
    return "Ruby"
  } else {
    return "CSS"
  }
};

$(function() {
  $("#surveyForm").submit(function() {
    event.preventDefault();
    // debugger;

    var answerTotal = 0;
    var allAnswered = true;
    for (var i = 1; i < 6; i++) {
      var answer = parseInt($("input:radio[name=question"+i+"]:checked").val());
      if (answer) {
        answerTotal += answer;
      } else {
        allAnswered = false;
        console.log("answer"+i+" was not answered");
      };
    };

    $(".surveyResult p").hide();
    if (allAnswered) {
      $("#"+getTrack(answerTotal)).show();
    };


    // get sum of answers



  });
});


// Answer weighting system

//C#    -    enterprise, microsoft, desktop     100-200
//Java  -    enterprise, Android(mobile)        200+
//PHP   -    web, content-heavy, back           95
//Ruby  -    web, dynamic-content, interactive  80 - 85
//CSS   -    web, design, front                 75


//question1
//What kind of company would you like to work for?
//100  - a large enterprise company
//50   - a small company or startup

//question2
//What kind of projects would you like to work on?
//10   - web-sites
//150  - mobile-apps
//50   - desktop apps and enterprise level software

//question3
//Which of these sounds most like something you would say?
//20   - a good website is informative and has a lot of things to look at
//10   - a good website should be interactive and respond to my actions
//5    - a good website should be nice to look at

//question4
//Which of these sound more interesting to you?
//10   - making the things a user sees look nice and interactive
//15   - creating the stuff behind the scenes that makes things work

//question5
//which are you more comfortable with?
//0    - windows
//0    - macOS
