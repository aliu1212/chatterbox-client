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
    MessagesView.$chats.prepend(`<div class = messageBox>
                                    <p class='username' onClick=${Friends.toggleStatus()}>${_.escape(message.username)}</p>
                                    <p class='text'> ${_.escape(message.text)}</p>
                                    <p class='time'> ${_.escape(message.createdAt)}</p>
                                </div>`);
  }
};