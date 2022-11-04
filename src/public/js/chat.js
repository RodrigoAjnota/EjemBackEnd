const socket = io({
    autoConnect: false
});
let user;
const chatBox = document.getElementById('chatBox');

Swal.fire({
    title: "Prueba",
    input: 'text',
    text: "Ingresa el nombre del usuario que tendras en el chat",
    inputValidator: (value) => {
        return !value && "Necesitas colocar un usuario correcto"
    },
    allowOutsideClick:false,
    allowEscapeKey : false,
}).then(result => {
    user = result.value;
    socket.connect()
    console.log(user);
})

chatBox.addEventListener('keyup',evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length>0){
            socket.emit('message',{user, message:chatBox.value.trim()})
        }
    }
})