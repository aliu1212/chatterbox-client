var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on( 'click', function() {
      Rooms.add();
    });
  },

  renderRoom: function(value) {
    RoomsView.$select.append(`<option value ="${value}">${value}</option>`);

  },

  

};
