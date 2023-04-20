var J1 = localStorage.getItem("Jugador 1");
var J2 = localStorage.getItem("Jugador 2");
J1Score = 0;
J2Score = 0;

document.getElementById("PlayerName1").innerHTML = J1;
document.getElementById("PlayerName2").innerHTML = J2;
document.getElementById("PlayerScore1").innerHTML = J1Score;
document.getElementById("PlayerScore2").innerHTML = J2Score;
document.getElementById("PlayerQuiz").innerHTML = "turno para preguntar = " + J1
document.getElementById("PlayerAnswer").innerHTML = "turno para responder = " + J2

function send(){
    Numero1 = document.getElementById("Numero 1").value;
    Numero2 = document.getElementById("Numero 2").value;
    pregunta_actual = parseInt(Numero1) * parseInt(Numero2);

    question_number = "<h4>" + Numero1 + "X" + Numero2 + "</h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>"
    check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("Numero 1").value = "";
    document.getElementById("Numero 2").value = "";

    question_turn = "player1";
    answer_turn = "player2";
}

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == pregunta_actual){
        if(answer_turn == J1){
            update_J1_score = J1 + 1;
            document.getElementById("PlayerScore1").innerHTML = update_J1_score;
        }

        else{
            update_J2_score = J2Score + 1;
            document.getElementById("PlayerScore2").innerHTML = update_J2_score;
        }
    }

    if(question_turn == J1){
        question_turn = J2;
        document.getElementById("PlayerQuiz").innerHTML = "Turno para preguntar : " + J2;
    }

    else{
        question_turn = J1;
        document.getElementById("PlayerQuiz").innerHTML = "Turno para preguntar : " + J1;
    }
}