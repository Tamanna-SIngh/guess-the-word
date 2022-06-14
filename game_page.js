
	player1_name = localStorage.getItem("player1_namekey");
	player2_name = localStorage.getItem("player2_namekey");

	player1_score = 0;
	player2_score = 0;
// <h4>
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
// <span>
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
// <h3>
document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;

	lowercase_word = get_word.toLowerCase();

	console.log("Userinput in lowerCase = " + lowercase_word);

// charAt(index number) = returns the CHARACTER at that index number from a string value.
// ACTIONS : 0 = A, 1=C, 2=T, 3=I , 4=O, 5=N, 6=S
// charAt(4) = O

    second_letter = lowercase_word.charAt(1); // returns the second letter of userinput
	console.log("Second letter ="+second_letter);

// actions.length = 7
// index number of the last = length(7) - 1 = 6
// index number of 's'= 6
// OPT.length = 3
// index number of last letter = 2 = 3 - 1
// lowercase_word = javascript
// lowercase_word.length = javascript.length = 10 - 1 = 9
// index_last = 9
// charAt(index_last) = charAt(9) = T
// last_letter = T

index_last = lowercase_word.length - 1; 
last_letter = lowercase_word.charAt(index_last); 
console.log(last_letter);

// index starts counting from 0 and LENGTH KEYWORD starts counting from 1.
// string_value.length = integer
// example = actions
// length = 7
// length/2 = 3.5
// floor(3.5) = 3
// floor(3.9) = 3
// ceiling (3.5) = 4
// lowercase_word = javascripts = 11/2 = 5.5
// Math.floor(5.5) = 5
// index_middle = 5
//charAt(5) = C
// middle_letter = C

	index_middle = Math.floor(lowercase_word.length/2); // to get the index number of middle letter
	middle_letter = lowercase_word.charAt(index_middle); 
	console.log(middle_letter);



// replace() = 2 parameter
// example = ACTIONS
// lowercase_word = actions
// remove_charAt1 = a_tions
// replace(lowercase_word) = act_ons 
// replace(remove_charAt1) = a_t_ons
// replace(letter that you want to replace, letter that will take its place)
// ACTIONS.replace( "C" , "_" ) = A_TIONS

	output1 = lowercase_word.replace(second_letter, "_ "); 
	// a_tions
	output2 = output1.replace(middle_letter, "_ ");
	// a_t_ons
	output3 = output2.replace(last_letter, "_ ");
	// a_t_on_
	console.log(output3); 

    question_word = "<h4> Question: " + output3 + "</h4><br>";
    input_box = " Answer : <input type='text' id='input_check_box'> <br><br> ";
    check_button = "<button class='btn btn-info' onclick='check()'> Check </button>";
	
	row =  question_word + input_box + check_button ; 
	
	document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}



question_turn = "p1";
answer_turn = "p2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
// SCORES IN SPAN TAGS
// nested if conditions
	if(answer == lowercase_word)	
	{
		if(answer_turn == "p1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	


// SWITCHING TURNS

	if(question_turn == "p1")
	{
		question_turn = "p2";
		document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name ;
	}
	else // question_turn == "p2"
	{
		question_turn = "p1";
		document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name ;
	}



	if(answer_turn == "p1")
	{
		answer_turn = "p2"
		document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name ;
	}
	else 
	{
		answer_turn = "p1"
		document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

