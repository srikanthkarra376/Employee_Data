function UserInfo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const UsersArray =JSON.parse(this.responseText);
        localStorage.setItem("employerList", JSON.stringify(UsersArray));
        UsersArray.forEach(User => {
        const output = `<tr> 
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

//SortTable

function sortTable(column) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
 while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
          if ((x.innerHTML) > (y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
