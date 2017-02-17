var getTrack = function(answerSum) {
  // return track based on which range answerSum falls
};

$(function() {
  $("#surveyForm").submit(function() {
    event.preventDefault();
    // debugger;
    var answer1 = parseInt($("input:radio[name=question1]:checked").val());
    var answer2 = parseInt($("input:radio[name=question2]:checked").val());
    var answer3 = parseInt($("input:radio[name=question3]:checked").val());
    var answer4 = parseInt($("input:radio[name=question4]:checked").val());
    var answer5 = parseInt($("input:radio[name=question5]:checked").val());

    // add check that all answers are selected
    if (answer1 && answer2 && answer3 && answer4 && answer5) {
      var answerTotal = answer1 + answer2 + answer3 + answer4 + answer5;
      console.log(answerTotal);
    } else {
      // add error message with bootstrap alert
      console.log("please answer all questions");
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
