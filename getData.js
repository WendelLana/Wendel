var req = new HttpClient();
            HttpResponseMessage result = req.GetAsync("https://dummy.restapiexample.com/api/v1/employees").Result;            
            var stringJson = result.Content.ReadAsStringAsync().Result;
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {            
            for (var i = 0; i < stringJson.value.length; i++) {
                var table = document.getElementById("tabelaCRM");
                var row = table.insertRow(0);
                var name = row.insertCell(0);
                var email = row.insertCell(1);
                var country = row.insertCell(2);
                console.log(stringJson.value[i]["employee_name"]);
                name.innerHTML = stringJson.value[i]["employee_name"];
                email.innerHTML = stringJson.value[i]["employee_salary"];
                country.innerHTML = stringJson.value[i]["employee_age"];
            }        
        }
    }
};
req.send();
