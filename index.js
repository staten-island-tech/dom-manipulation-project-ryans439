const DOMSelectors = {
    form: document.getElementById('playerForm'),
    nameInput: document.getElementById('playerName'),
    teamInput: document.getElementById('playerTeam'),
    playersContainer: document.getElementById('playersContainer')
};

function createPlayerObject() {
    return {
        name: DOMSelectors.nameInput.value,
        team: DOMSelectors.teamInput.value
    };
}

function injectPlayerObject(player) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.innerHTML = `
        <span>${player.name} - ${player.team}</span>
        <span class="remove" onclick="removePlayerObject(this)">Remove</span>
    `;
    DOMSelectors.playersContainer.appendChild(playerDiv);
}

function clearInputFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.teamInput.value = '';
}
function removePlayerObject(element) {
    const playerDiv = element.parentElement;
    DOMSelectors.playersContainer.removeChild(playerDiv);
}


DOMSelectors.form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const newPlayer = createPlayerObject();
    injectPlayerObject(newPlayer);
    clearInputFields();
});
