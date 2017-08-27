$(document).ready(function() {
  var randomQuestionNumber, randomQuestion, randomCompliment;
  getQuestion();

function getQuestion() {
  var questions = [],
  index = 0;

  questions[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302995/A001_v1lfyb.png' alt='A001'>"; 
  questions[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502408657/A002_vl21d6.png' alt='A002'>";
  questions[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A003_jamqoz.png' alt='A003'>";
  questions[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A004_lrfpsu.png' alt='A004'>";
  questions[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A005_lbvj8z.png' alt='A005'>";
  questions[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502303005/A006_k2nou0.png' alt='A006'>";
  questions[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A007_u0m8ji.png' alt='A007'>";
  questions[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A008_rwyjio.png' alt='A008'>";
  questions[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A009_d8y1tb.png' alt='A009'>";
  questions[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408827/A010_kfakt7.png' alt='A010'>";
  questions[10] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A011_ba0pqz.png' alt='A011'>"; 
  questions[11] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A012_arzxvo.png' alt='A012'>"; 
  questions[12] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_280/v1502408658/A013_xqydn5.png' alt='A013'>"; 
  questions[13] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A014_ub0qw5.png' alt='A014'>"; 
  questions[14] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A015_wsc54z.png' alt='A015'>"; 
  questions[15] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A016_azjaak.png' alt='A016'>"; 
  questions[16] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A017_gwk5mx.png' alt='A017'>"; 
  questions[17] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502410367/A018_voy8up.png' alt='A018'>"; 
  questions[18] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A019_uwtsrr.png' alt='A019'>"; 
  questions[19] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A020_yia49v.png' alt='A020'>"; 
  questions[20] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A021_icicl0.png' alt='A021'>"; 
  questions[21] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A022_kva6zu.png' alt='A022'>"; 
  questions[22] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A023_xcip7f.png' alt='A023'>"; 
  questions[23] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A024_tphnql.png' alt='A024'>"; 
  questions[24] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A025_rsvgag.png' alt='A025'>"; 

  var answers = [],
  index = 0

  answers[0] = "b";  
  answers[1] = "a";  
  answers[2] = "c";  
  answers[3] = "c";  
  answers[4] = "b";
  answers[5] = "b";
  answers[6] = "d";
  answers[7] = "a";
  answers[8] = "c";
  answers[9] = "b";
  answers[10] = "c";
  answers[11] = "c";
  answers[12] = "c";
  answers[13] = "b";
  answers[14] = "c";
  answers[15] = "d";
  answers[16] = "a";
  answers[17] = "b";
  answers[18] = "d";
  answers[19] = "b";
  answers[20] = "a";
  answers[21] = "b";
  answers[22] = "a";
  answers[23] = "c";
  answers[24] = "d";
  
  var compliments = [
    "Yay!",
    "Good job!",
    "Rock the Kasbah!",
    "Out of Sight!",
    "Raise the Roof!",
    "Do a Little Dance!",
    "Well Done!",
    "Way to Go!",
    "Awesome!",
    "Super Duper!",
    "That's the Way, uh huh, uh huh!",
    "Hip, Hip, Hooray!",
    "Give Yourself a Pat on the Back!",
    "You Got the Skills!",
    "Kudos!",
    "Nice One!",
    "Solid!",
    "Thumbs Up!",
    "Splendiferous!",
    "Bring the Aloe Vera!",
    "Beee-you-tee-full!",
    "Top Notch!",
    "First Rate!",
    "Brilliant!"
  ];
  
  

  randomQuestionNumber = Math.floor(Math.random() * (questions.length));
  randomQuestion = questions[randomQuestionNumber];
  
  randomCompliment = compliments[Math.floor(Math.random() * (compliments.length))];

  $(".question").html(randomQuestion).width = "400";

  
	document.getElementById("check-answer").onclick = function fun() {              
		if(document.getElementById(answers[randomQuestionNumber]).checked) {
				  swal(
		  randomCompliment,
		  'You conquered that question!',
		  'success'
		)
		  } else {
		  alert("Not quite! \nGive it another try!");
		}
	  }
    

  }

  $("#newQuestion").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestion();   
  })
});
