function colocar()
    {var numero = parseInt(document.getElementById("numero").value); 
    var color = "yellow"; 
    var bordes = "dotted"; 
    var estilo = "width: 90px; height: 90px; margin: 15px; border: 7px "+bordes+" "+color; 
    var box = "";
    for(var i = 0; i < numero; i++)
    {box += "<article style=\""+estilo+"\"></article>";}
    document.getElementById('cajas').innerHTML = box;}