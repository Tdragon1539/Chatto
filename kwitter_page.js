//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyArHFmKANKuXg9EOkSbLnCZlrVIlicSwl8",
      authDomain: "kwitter-f8833.firebaseapp.com",
      databaseURL: "https://kwitter-f8833-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8833",
      storageBucket: "kwitter-f8833.appspot.com",
      messagingSenderId: "147178747584",
      appId: "1:147178747584:web:9ed48bda3e9c68011a1f25"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_with_tag= "<h4>"+user+"<img class='user_tick' src='tick.png'> </h4>";
//End code
      } });  }); }
getData();


function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
like: 0,
Message:msg,
user: user_name
      });

      document.getElementById("msg").innerHTML="";
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location.replace("index.html");
}
