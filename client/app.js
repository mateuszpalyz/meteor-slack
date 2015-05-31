Template.messages.helpers({
  messages: Messages.find({})
});

Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
        Messages.insert({
          text: $('.input-box_text').val(),
          user: Meteor.userId(),
          timestamp: Date.now()});
        $('.input-box_text').val("");
        return false;
      }
    }
  }
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});
