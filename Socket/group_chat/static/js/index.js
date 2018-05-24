$(document).ready( () => {
    //console.log("test");

    const socket = io();

    //socket.on('init', data => console.log(data.msg) );
    socket.on('init', () => {
        console.log('connection complete');
    });

    $('form').on('submit', (e) => {
        //e.preventDefault();
        socket.emit('got_a_new_user', $('input[name=name]').val());
        //console.log($('input[name=name]').val());
        //$('input[name=name]').val(null);
    })

})
