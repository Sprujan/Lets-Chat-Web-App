// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCQy7rJPd1ECc1ieqq0S5efDc_G66Rr6IQ",
      authDomain: "kwitter-4ab87.firebaseapp.com",
      databaseURL: "https://kwitter-4ab87-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ab87",
      storageBucket: "kwitter-4ab87.appspot.com",
      messagingSenderId: "955635399433",
      appId: "1:955635399433:web:0f00776334d86df9f6b1d8"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a room name"
      });
      localStorage.setItem("room_name_key", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_room(this.id)'  >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirect_room(name){
      localStorage.setItem("room_name_key", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name_key")
      window.location = "index.html";
}