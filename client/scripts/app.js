var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  room: 'Heck',
  lastMessages: [],

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
      Parse.readAll((data) => {
        // examine the response from the server request:
        console.log(data);
        var messagesArray = data.results;
        m1 = JSON.stringify(messagesArray);
        m2 = JSON.stringify(App.lastMessages);

        if (m1 !== m2) {
          for ( var i = messagesArray.length - 1; i >= 0 ; i--) {
            if (messagesArray[i].text){
              MessagesView.renderMessage(messagesArray[i]);
            } else {
              continue;
            }
          }
          App.lastMessages = messagesArray;
        } 
        
        setTimeout(this.fetch.bind(this), 1000);
        callback();
      });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
