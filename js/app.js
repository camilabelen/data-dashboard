/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`


/*grafico 1 inscritas y deserciones*/

google.load("visualization", "1.0", {
    "packages": ["corechart"]
});
google.setOnLoadCallback(dibujar);

function dibujar(){
  var data1 = new google.visualization.DataTable();
  data1.addColumn("string", "Alumnas");
  data1.addColumn("number", "Actividad");
  data1.addRows(
    [
      ["Activas",26],
      ["Inactivas",33],
    ]
  );
  var opciones1 = {
    title: "Alumnas",
    pieHole: 0.3,
  };
  var grafica1 = new google.visualization.PieChart(document.getElementById("grafico1"));
  grafica1.draw(data1,opciones1);
}

/*grafico de nivel técnico*/
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


/*función de navegacion por tabs*/
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

/*accediendo a data para seccion 'estudiantes'*/



