document.addEventListener("DOMContentLoaded", () => {
    console.log('welcome to sockets');
    var socket = io();

    /* let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        socket.emit("from_client");
    })

    socket.on('from_server', () => {
        let div = document.getElementById('from_server');
        let p = document.createElement('p');
        p.textContent = 'received an event from the server';
        div.appendChild(p);
    }) */

    let input = document.getElementById("chat_box");
    let msgList = document.getElementById("msg_list");
    let send = document.getElementById("send");

    send.addEventListener("click", () => {
        let msg = input.value;
        console.log(msg);
        socket.emit('new_msg', {
            message: msg,
        });
        input.value = "";
    });
    socket.on('msg_rcvd', (data) => {
        console.log('data', data);
        let msg = document.createElement("li");
        msg.textContent= data.message;
        msgList.appendChild(msg);
    })
})