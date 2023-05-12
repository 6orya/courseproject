document.addEventListener("DOMContentLoaded", function(){
    loadXMLDoc();
});

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "./simpletext.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("AUTHOR");
    if (x[0]) {
        var txt = x[0].childNodes[0].nodeValue;
        document.getElementById("demo").innerHTML = txt;
    } else {
        document.getElementById("demo").innerHTML = "Не найден тег AUTHOR в XML-файле.";
    }
}