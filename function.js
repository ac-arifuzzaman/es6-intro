document.getElementById('border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid black';
    container.style.padding = '10px';
})

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
        friend.style.margin = '10px';
        friend.style.padding = '10px';
    }
}

document.getElementById('addFriend').addEventListener('click', function () {
    console.log('click add friend')
    const container = document.getElementById('friend-container');
    const creatDiv = document.createElement('div');
    creatDiv.classList.add('friend');
    creatDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Quaerat, provident?</p>
    `;
    container.appendChild(creatDiv);
})