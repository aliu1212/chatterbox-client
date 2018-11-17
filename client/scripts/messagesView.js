var MessagesView = {

  $chats: $('#chats'),
  // $submit: $('#send button'),

  initialize: function() {
    $('#send .submit').on( 'submit', function() {
      var message = $('#send .submit').val();
      console.log('messages:', message);
      Parse.create(message, function() { console.log('Message sent.'); }, null);
    });
  },

  renderMessage: function(message) {
    // if (!Rooms[message.rooms]) {
    //   Rooms.rooms.push(message.rooms);
    // }
    // Check if username exist inside message object
    if (!Messages[message['username']]) {
      Messages[message.username] = [];
    }
    
    Messages[message.username].push(message);
    MessagesView.$chats.prepend(`<div>
                                    <p class='username' onClick=${Friends.toggleStatus()}>${message.username}</p>
                                    <p class='text'> ${message.text}</p>
                                </div>`);
  }
};