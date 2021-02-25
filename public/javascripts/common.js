var nick = '';

function login(nick) {
    window.location.href = '/chat';
    console.log('xd');
}

function setNick(nick) {
    document.getElementById('welcome-header').innerHTML = "Welcome " + nick + "!";
}