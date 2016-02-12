Meteor.methods({
  newMessage (message) {
    console.log(message)  
    
    // must check all fields in message
    check(message, {
        text: String,
        type: String,
        chatId: String
    });

    message.timestamp = new Date();
 
    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });
 
    return messageId;
  }
});