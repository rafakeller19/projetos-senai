function log() {
    event.preventDefault();
    let nome = document.getElementById('name').value;
    let senha = document.getElementById('pass').value;


    if (nome == "admin" && senha == "admin") {
        Swal.fire({
            title: "Bem Vindo ao Sistema!",
            icon: "success",
            draggable: true
        }).then(() => {
            window.location.href = "index.html";
        });

    } else {
        if (nome == "operacional" && senha == "opec2026") {
            Swal.fire({
                title: "Bem Vindo ao Sistema!",
                icon: "success",
                draggable: true
            }).then(() => {
                window.location.href = "index2.html";
            });

        } else {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuário ou Senha inválidos!!!",
                //footer: "<a href=\"#\">login.html</a>"
            });
             document.querySelector('form').reset();
        }
    }
}