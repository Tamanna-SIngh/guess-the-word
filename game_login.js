
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
// key-value pair
    localStorage.setItem("player1_namekey", player1_name);
    localStorage.setItem("player2_namekey", player2_name);
//page redirection
    window.location = "game_page.html";
}

