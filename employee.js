function showInfo() {
  const data = JSON.parse(localStorage.getItem("employerList"));
  const  obj = getUrlVars();
  for(var i=0;i<data.length;i++){
    if(data[i].id == obj.id){

      const output =`<div class="info">
                    <div>
                    <img  src="./images/user_${data[i].id}.jpg">
                    </div>
                    <div>
                    <h1>${data[i].firstname.toUpperCase()},${data[i].lastname.toUpperCase()} </h1> 
                   <p>Email:<b>${data[i].email}</b><p> 
                   <p>Age:<b>${2018-data[i].birthdate}</b><p> 
                   <p>Ville:<b>${data[i].city}</b><p> 
                   <p>${data[i].info}</p>
                   </div>
                   </div>`;
                   
               
          document.getElementById("showdata").innerHTML +=output;
    }

  }
}
function getUrlVars() {
  var vars = {} ;
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}