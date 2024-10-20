const DOMSelectors = {
    form: document.getElementById('playerForm'),
    nameInput: document.getElementById('playerName'),
    teamInput: document.getElementById('playerTeam'),
    imageInput: document.getElementById('playerImage'),
    playersContainer: document.getElementById('playersContainer')
};

function createPlayerObject() {
    return {
        name: DOMSelectors.nameInput.value,
        team: DOMSelectors.teamInput.value,
        image: DOMSelectors.imageInput.value
    };
}

function injectPlayerObject(player) {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player-card');

    playerDiv.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <div class="player-info">
            <h2>${player.name}</h2>
            <p>${player.team}</p>
            <span class="remove" onclick="removePlayerObject(this)">Remove</span>
        </div>
    `;
    
    DOMSelectors.playersContainer.appendChild(playerDiv);
}

function clearInputFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.teamInput.value = '';
    DOMSelectors.imageInput.value = '';
}

function removePlayerObject(element) {
    const playerDiv = element.parentElement.parentElement;
    DOMSelectors.playersContainer.removeChild(playerDiv);
}

DOMSelectors.form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newPlayer = createPlayerObject();
    injectPlayerObject(newPlayer);
    clearInputFields();
});
