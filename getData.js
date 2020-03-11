var req = new XMLHttpRequest(); 
req.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) { 
            var result = JSON.parse(req.responseText).data;            
            for (var i = 0; i < result.length; i++) {
                var table = document.getElementById("tabelaCRM");
                var row = table.insertRow(0);
                var name = row.insertCell(0);
                var email = row.insertCell(1);
                var country = row.insertCell(2);
                name.innerHTML = result[i]["employee_name"];
                email.innerHTML = result[i]["employee_salary"];
                country.innerHTML = result[i]["employee_age"];
            }        
        }
    };
req.send();
