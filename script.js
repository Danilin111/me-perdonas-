let contadorNo = 0;

document.getElementById('siBtn').addEventListener('click', function() {
    alert('¡Sabía que dirías que sí! 💖 Eres la mejor. 🥰');
});

document.getElementById('noBtn').addEventListener('click', function() {
    contadorNo++;
    if (contadorNo < 3) {
        alert('COMO QUE NO?');
    } else if (contadorNo === 3) {
        alert('¡Ya no puedes decir que no! 😤');
        document.getElementById('noBtn').disabled = true;
    } else {
        document.getElementById('imagenEspecial').classList.remove('hidden');
    }
});