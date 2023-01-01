function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;

    if (uname == "1" && pwd == "1") {
        location.replace("sukses.html");
        alert("Login Berhasil");
    } else {
        alert("Login gagal!")
    }
}