const input = document.getElementById('prompt-input');
input.onchange = function(e) { 
    let valor = e.target.value.toLowerCase();       
    if (valor == "s" || valor == "si") {
        window.location.href = "/";
    }
};
