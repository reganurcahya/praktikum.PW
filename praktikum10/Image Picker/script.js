function imgPicker() {
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "Elang.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Elang";
        alert("Ini adalah gambar Elang");
    } else if (picker == "water") {
        images.src = "Leopard.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Leopard";
        alert("Ini adalah gambar Leopard");
    } else if (picker == "electric") {
        images.src = "Kucing.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Kucing";
        alert("Ini adalah gambar Kucing");
    } else if (picker == "dark") {
        images.src = "Harimau.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar harimau";
        alert("Ini adalah gambar harimau");
    } else if (picker == "psyhic") {
        images.src = "Gajah.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Gajah";
        alert("Ini adalah gambar Gajah");
    } else if (picker == "fairy") {
        images.src = "Rubah.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Rubah";
        alert("Ini adalah gambar Rubah");
    } else if (picker == "grass") {
        images.src = "Koala.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Koala";
        alert("Ini adalah gambar Koala");
    } else if (picker == "ice") {
        images.src = "Singa.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar Singa";
        alert("Ini adalah gambar singa");
    } else {
        alert("Gagal");
    }
}