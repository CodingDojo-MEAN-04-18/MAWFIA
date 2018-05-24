
$(document).ready( ()=> {
    //console.log("hello chat room");
    let user = null;
    const socket = io();

    socket.on('chat', data => {
        user = data.user;
        update(data.users);
    });
    socket.on('add_user', users => update(users));
    socket.on('remove_user', users => update(users));

    const update = ((users)=> {
        console.log(users);
        $('#users').html(`<div class='chat_window'><h3>(You) ${user.username}</h3></div>`);

        users.filter(u=>u.id!=user.id).forEach( u=>$('#users').append(`<div class='chat_window'><h3>${u.username}</h3></div>`));
    })
})
