//when button pressed:
document.getElementById('calculate-btn').addEventListener('click', function() {
    let basePrice = 100;

    // education
    const education = parseFloat(document.getElementById('education').value);
    basePrice *= education;

    // family-net-worth
    const netWorth = parseFloat(document.getElementById('net-worth').value);
    basePrice *= netWorth;

    // caste(just addition)
    const caste = parseFloat(document.getElementById('caste').value);
    basePrice += caste;

    // skills
    const instrument = document.getElementById('instrument').checked ? parseFloat(document.getElementById('instrument').value) : 0;
    const cook = document.getElementById('cook').checked ? parseFloat(document.getElementById('cook').value) : 0;
    const easygoing = document.getElementById('easygoing').checked ? parseFloat(document.getElementById('easygoing').value) : 0;
    const sing = document.getElementById('sing').checked ? parseFloat(document.getElementById('sing').value) : 0;
    basePrice += (instrument + cook + easygoing + sing);

    // age
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    basePrice *= age;

    // reputation
    const gossipParents = document.getElementById('gossip-parents').checked ? parseFloat(document.getElementById('gossip-parents').value) : 1;
    const gossipCharacter = document.getElementById('gossip-character').checked ? parseFloat(document.getElementById('gossip-character').value) : 1;
    const gossipGeneral = document.getElementById('gossip-general').checked ? parseFloat(document.getElementById('gossip-general').value) : 0;
    basePrice *= gossipParents * gossipCharacter;
    basePrice += gossipGeneral;

    // display the result
    document.getElementById('result').textContent = 'Bride/Groom Price: $' + basePrice.toFixed(2);

    // CSS modification for result
    document.getElementById('result').style.color = basePrice > 200 ? 'green' : 'red';
});
