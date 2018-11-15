function UserInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let UsersArray =JSON.parse(this.responseText);
        UsersArray.forEach(User => {
        let output = `<tr> 
                     <td>${User.firstname},${User.lastname} </td>
                     <td>${User.email} </td>
                     <td>${2018-User.birthdate} </td>
                     <td>${User.city} </td>
                     <td><a href="show.html"> <img src="./images/picto_plus.png"></a></td>
                     </tr>`;
             document.getElementById("data").innerHTML +=output;        
      });
    }
  };
  xhttp.open("GET", "users.json", true);
  xhttp.send();
}
function showInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let UsersArray =JSON.parse(this.responseText);
      UsersArray.forEach(User => {
          let output = ` <img class="User" src="./images/user_${User.id}.jpg">
           <h1>${User.firstname.toUpperCase()},${User.lastname.toUpperCase()} </h1> 
                        <p><h6>Email:${User.email}</h6><p> 
                        <p><h6>Age:${2018-User.birthdate}</h6><p> 
                        <p><h6>Ville:${User.city}</h6><p> 
                        <p>${User.info}</p>`;
                    
               document.getElementById("showdata").innerHTML +=output;        
        });
      }
    };
    xhttp.open("GET", "users.json", true);
    xhttp.send();
  }
