function calculate() {
    var total;
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var service = document.getElementById("service");
    var tip = service.options[service.selectedIndex].value;
    if (bill >= 0 && people > 0) {
        total = (bill * tip) / people;
        
    } else {
        alert("Please make sure the bill amount and number of persons are not negative");
    }
    document.getElementById("amount").innerHTML = total;
    document.getElementById("display").style.display = 'block';
}