function UserInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const UsersArray =JSON.parse(this.responseText);
        localStorage.setItem("employerList", JSON.stringify(UsersArray));
        UsersArray.forEach(User => {
        let output = `<tr> 
                     <td>${User.firstname},${User.lastname} </td>
                     <td>${User.email} </td>
                     <td>${2018-User.birthdate} </td>
                     <td>${User.city} </td>
                     <td><a href="employee.html?id=${User.id}"><img src="./images/picto_plus.png"></a></td>
                     </tr>`;
             document.getElementById("data").innerHTML +=output;        
      });
    }
  };
  xhttp.open("GET", "users.json", true);
  xhttp.send();
}