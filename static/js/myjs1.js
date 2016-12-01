var infoDiv = document.getElementById("info");	
var dbRequest = new XMLHttpRequest();
dbRequest.open('GET', 'http://127.0.0.1:5984/myDB/8c3f8a3a-0e5a-47ab-83cb-eacc3154161e');
dbRequest.onload = function() {

var dbData = JSON.parse(dbRequest.responseText);
renderHTML(dbData);
renderHTML2(dbData);
renderHTML3(dbData);
};

dbRequest.send();

function renderHTML(dbData){

   var jData = "<p style='color:white;'><br>" + dbData.txt1 + "<p>";
   infoDiv.insertAdjacentHTML('beforeend', jData);
     
}


var infoDiv2 = document.getElementById("info2");	


function renderHTML2(dbData){

   var jData = "<p><br>" + dbData.txt2 + "<p>";
   infoDiv2.insertAdjacentHTML('beforeend', jData);
     
}



var infoDiv3 = document.getElementById("info3");	


function renderHTML3(dbData){

   var jData = "<p><br>" + dbData.txt3 + "<p>";
   infoDiv3.insertAdjacentHTML('beforeend', jData);
     
}