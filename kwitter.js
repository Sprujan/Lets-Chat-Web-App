function addUser(){
    username = document.getElementById("kwitter").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}