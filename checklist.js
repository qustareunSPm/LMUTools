let checkboxes = document.querySelectorAll('.race-ch');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let checkedCount = document.querySelectorAll('.race-ch:checked').length;
        if (checkedCount === checkboxes.length) {
            document.getElementById('result').innerText = "READY TO RACE! 🏎️💨";
            document.getElementById('result').style.color = "#4cd137";
        } else {
            document.getElementById('result').innerText = "Status: Checked " + checkedCount + " of " + checkboxes.length;
            document.getElementById('result').style.color = "#FF1D43";
        }
    });
});