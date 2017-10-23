window.onload=function(){
    console.log('load method')
    Chat();
}

function Chat() {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#n').val()+'  ：  '+$('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
}