let choicesEl = document.querySelector("#choices");
let timerEl = document.querySelector("#timer");





//if answer is wrong
//timer -= 10;

let intervalId = setInterval(function(){

    //timer (timerEl = 90);

} ,1000
 

);

//gameover function
 // clearInterval(intervalId);

 // timer = score

 let questions = [ {q1:"qq?", Answers:["a1","a2","a3","a4"], correctAnswer:2},
                   {q2:"qq?", Answers:["a1","a2","a3","a4"], correctAnswer:3},
                   {q3:"qq?", Answers:["a1","a2","a3","a4"], correctAnswer:1},
                   {q4:"qq?", Answers:["a1","a2","a3","a4"], correctAnswer:4}

 ];
 let currentQuestion = 1;

 //if statement
 //timer reaches zero then clear interval

 //loop over array and generate buttons

 //data-index to determine answer right or not

 choicesEl.addEventListener("click", function(event){
    if (event.target.matches("button")){
        console.log(event.target.getAttribute("data-index"));
    };
});