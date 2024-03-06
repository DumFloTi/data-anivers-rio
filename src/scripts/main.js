AOS.init();

let contaHoras;
var gif = document.getElementById('celeb');

document.getElementById("hero__date").addEventListener("change", function() {
    clearInterval(contaHoras);

    const input = this.value;
    const dateEntered = new Date(input);
    const timeEvento = dateEntered.getTime();
    const timeNaEscolha = new Date();
    const verTime = timeNaEscolha.getDate();

    contaHoras = setInterval(function() {
        const agora = new Date();
        const timeAtual = agora.getTime();

        const tempoAteEvento = timeEvento - timeAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
        const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
        const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
        const segundosAteEvento = Math.floor((tempoAteEvento % minutoEmMs) / 1000);

        if (tempoAteEvento > 0) {
            document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
            gif.style.display = 'none';
        } 
        
        else if (verTime === dateEntered.getDate()) {
            clearInterval(contaHoras);
            document.getElementById('contador').innerHTML = 'Parabéns!';
            gif.style.display = 'block';
        } 
        
        else {
            clearInterval(contaHoras);
            document.getElementById('contador').innerHTML = 'Aniversario passou...';
            gif.style.display = 'none';
        }
    }, 1000);
});