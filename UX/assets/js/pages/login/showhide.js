function togglePassowordVisibility() {
    var p = document.getElementById("inputpassword");
    if (p.type === "password") {
      p.type = "text";
    } else {
      p.type = "password";
    }
}

function toggleRepeatVisibility() {
    var p = document.getElementById("repeatpasswordinput");
    if (p.type === "password") {
      p.type = "text";
    } else {
      p.type = "password";
    }
}