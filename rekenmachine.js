

function telop() {
    console.log('Telop werkt')
    var waarde1 = document.getElementById('invoer1').value;
    var waarde2 = document.getElementById('invoer2').value;
    
    var a = Number.parseInt(waarde1);
    var b = Number.parseInt(waarde2);
    var uitkomst = a + b;
    
    document.getElementById('resultaat').textContent = 'uitkomst' + uitkomst

}