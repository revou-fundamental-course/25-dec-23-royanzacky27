function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = 0.5 * alas * tinggi;

    var formula = "Luas Segitiga: 1/2 x " + alas + " x " + tinggi;
    
    document.querySelector(".result").textContent = formula + " = " + luas + " cm2";
}


function hitungKeliling() {
    // Ambil nilai sisi dari input
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    // Hitung keliling segitiga
    var keliling = sisiA + sisiB + sisiC;

    // Tampilkan hasil
    document.getElementById('hasilKeliling').textContent = keliling;
}


