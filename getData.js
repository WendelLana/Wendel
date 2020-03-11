var req = new XMLHttpRequest(); 
req.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
            for (var i = 0; i < results.value.length; i++) {
                var table = document.getElementById("tabelaCRM");
                var row = table.insertRow(0);
                var name = row.insertCell(0);
                var email = row.insertCell(1);
                var country = row.insertCell(2);
                console.log(results.value[i]["employee_name"]);
                name.innerHTML = results.value[i]["employee_name"];
                email.innerHTML = results.value[i]["employee_salary"];
                country.innerHTML = results.value[i]["employee_age"];
            }        
        }
    }
};
req.send();
