document.getElementById('calcStints').addEventListener('click', function() {
    let raceTime = parseFloat(document.getElementById('totalRaceTime').value) || 0;
    let stintTime = parseFloat(document.getElementById('stintTime').value) || 0;

    if (stintTime >= raceTime) {
        document.getElementById('result').innerText = "No pit-stops needed! Single stint.";
        return;
    }

    let pitStops = Math.ceil(raceTime / stintTime) - 1;
    document.getElementById('result').innerText = "Stints: " + Math.ceil(raceTime / stintTime) + " | Pit-stops required: " + pitStops;
});