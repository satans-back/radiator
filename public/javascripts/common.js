var nick = '';

function login(nick) {
    window.location.href = '/chat';
}

function setNick(nick) {
    document.getElementById('welcome-header').innerHTML = "Welcome " + nick + "!";
}