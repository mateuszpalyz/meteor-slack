Meteor.startup(function() {
  Channels.remove({});
  Channels.insert({
    name: 'general'
  });
  Channels.insert({
    name: 'random'
  });

  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'general'
  });

  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }
});
