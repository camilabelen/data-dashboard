/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
google.charts.load('current', {packages: ['corechart']});
      function drawChart ()
      {
      	var data  = new google.visualization.DataTable();/* creando una tabla de datos */
      	data.addColumn('string','Alumnas');
      	data.addColumn('number','Porcentaje');
      	data.addRows(
      		[
      		['Alumnas sobre',90],
      		['alumnas de',70],
      		['alumnas bajo',70]
      		]
      		);

      	var titulos = {'title':'Nivel Tecnico'};
      	var tipo = new google.visualization.AreaChart(document.getElementById('ntecnico'));
      	tipo.draw(data,titulos);


}
google.charts.setOnLoadCallback(drawChart);


/*funciòn de intento de navegacion por tabs*/
function openCharts(evt, chartsName) {
     var i, tabcontent, tablinks;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(chartsName).style.display = "block";
    evt.currentTarget.className += "active";
}