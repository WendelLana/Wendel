
console.log("worked");
var req = new XMLHttpRequest(); 
req.open("GET", "https://ax4bc.crm.dynamics.com/api/data/v9.1/accounts?$select=name,emailaddress1,address1_country", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
var tempArray = new array();
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
                name.innerHTML = results.value[i]["name"];
                email.innerHTML = results.value[i]["emailaddress1"];
                country.innerHTML = results.value[i]["address1_country"];
                }
        }        
    }
};
req.send();
