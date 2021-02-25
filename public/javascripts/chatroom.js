/*
    'room-iron',
    'room-aluminium',
    'room-floor',
    'room-steel',
    'room-canal'
*/



let CURRENT_ROOM = 'room-iron';

function changeRoom(ROOM_ID) {
    document.getElementById(CURRENT_ROOM).classList.remove('mdc-list-item--activated');
    CURRENT_ROOM = ROOM_ID;
    document.getElementById(ROOM_ID).classList.add('mdc-list-item--activated');
}