var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = $('#message').val()
    var user = App.username;
    var messageObj = {
      text: message,
      roomName: App.room,
      username: user
    };


    Parse.create(messageObj, Parse.readAll(() => {console.log('message sent')}));
    // MessagesView.renderMessage(messageObj);
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};