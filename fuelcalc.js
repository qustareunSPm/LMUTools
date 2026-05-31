function updateValueRD(val) {
    let hrs = Math.trunc(val / 60);
    let mins = Math.trunc(val - hrs * 60);
    document.getElementById('time').innerText = hrs + 'h' + ' ' + mins + 'm';
}

function updateValueSM(val) {
    document.getElementById('extralaps').innerText = val + ' Laps';
}

document.getElementById('calculate').addEventListener('click', function() {
    let raceDurMins = parseFloat(document.getElementById('racedur').value) || 0;
    let fuelPerLap = parseFloat(document.getElementById('fuelperlap').value) || 0;
    
    let lapMins = parseFloat(document.getElementById('fuelperlapmins').value) || 0;
    let lapSecs = parseFloat(document.getElementById('fuelperlapsecs').value) || 0;
    let lapMs = parseFloat(document.getElementById('fuelperlapmss').value) || 0;
    
    let safetyLaps = parseFloat(document.getElementById('safetymargin').value) || 0;

    let totalLapSecs = (lapMins * 60) + lapSecs + (lapMs / 1000);
    let raceDurSecs = raceDurMins * 60;

    let totalLaps = Math.ceil(raceDurSecs / totalLapSecs);
    
    let finalFuel = (totalLaps + safetyLaps) * fuelPerLap;

    document.getElementById('result').innerText = "Total Fuel: " + finalFuel.toFixed(2) + " L";
});