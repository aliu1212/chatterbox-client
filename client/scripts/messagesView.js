var MessagesView = {

  $chats: $('#chats'),
  // $submit: $('#send button'),

  initialize: function() {
    $('#send .submit').on( 'submit', function() {
      var message = $('#send .submit').val();
      console.log('messages:', message);
      Parse.create(message, function() { console.log('Message sent.'); }, null);
    });
    // $('#send button').on( 'click', function() {
    //   var message = $('#send #message').val();
    //   console.log('messages:', message);
    //   Parse.create(message, function() { console.log('Message sent.'); }, null);
    // });
  },

  renderMessage: function(message) {

    MessagesView.$chats.append(`<div>
                                    <p class='username' onClick=${Friends.toggleStatus()}>${message.username}</p>
                                    <p class='text'> ${message.text}</p>
                                </div>`);
  }

  // $( ".username" ).on( "click", function() {
  //   Friends.toggleStatus();
  // })
};