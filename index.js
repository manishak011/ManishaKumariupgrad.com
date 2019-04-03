function myFunction() {
  var x = document.getElementById("form1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction2(){
	var y = document.getElementById("name").value;
	var z = document.getElementById("phone").value;
    var x = document.getElementById("data");
    var a = document.getElementById("form1");
    var tab = document.getElementById("tab");
    
	/*document.getElementById("demo").innerHTML = y;
	document.getElementById("task").innerHTML = z;*/
	if (y!= "" || z!= "") {
		x.style.display = "table-row";
	}
	a.style.display = "none";
	var butt = document.createElement('input'); // create a button
    butt.setAttribute('type','button'); // set attributes ...
    butt.setAttribute('class','btn btn-default');
    butt.setAttribute('name','delete');
    butt.setAttribute('value','delete');
    butt.setAttribute('onclick','removeRow(this);')


	var newRow = tab.insertRow(tab.rows.length);
	
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);

	cel1.innerHTML = y;
	cel2.innerHTML = z;
	newRow.cells[2].appendChild(butt);
}
function removeRow(oButton) {
        var empTab = document.getElementById('tab');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);   
    }
