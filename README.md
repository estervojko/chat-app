***Chat App using Web Sockets.***

*Link to the deployed project:*

https://chat-app-ester.herokuapp.com/

***Note: Users have to be logged in to send messages for now***

This chat application concept is a full-stack CRUD, that is built with React and Ruby on Rails. It demonstrates learning, using and integrating various technologies in a short period of time. Users can login in using the credentials below:

- username: gates@gmail.com
- password: test

Users have to login before they can post. After being logged in users are directed to the profile page, where they can update their profile picture. The chatroom button will take you on the chatrooms screen. On the left, logged in users can click on a chatroom, and the message interactions between the participating users will be displayed on the right, where they can also choose to post a message.

When clicking post, the Action Cable feature of Ruby on Rails will broadcast that message live on all the users currently viewing that chatroom.

***Technologies Used***

- React
- React Router dom
- Semantic UI
- Ruby on Rails

***Features List***

- Login/Logout
- Users can view their profile and change their profile picture
- Users can post other messages

***Entity-Relationship Diagram***

A user has many messages and and a message belongs to a user. A chatroom has many messages and a message belongs to a chatroom.

![Entity-Relationship Diagram](https://github.com/estervojko/chat-app/blob/master/assets/_Entity%20Relationship%20Diagram.jpeg?raw=true)

***Wireframe***
![Wireframe](https://github.com/estervojko/chat-app/blob/master/assets/Wireframe.jpg?raw=true)

***Minimum Viable Product (M.V.P)***
For my M.V.P I would like to implement and deploy what's in the wireframe. In other words, users can login, update the profile
picture, and view various chatrooms. Users can interact with each other in real time by exchanging messages in a particular chatroom.

***Post MVP features***

As a Post MVP feature I would like to add these features:
- Logged in users can view other user's profile
- Users can delete messages in real time
- Register button
- Improve overall styling

***Code example***

This app takes advantage of the action cable feature of Rails, which allows us to use the web-sockets protocol and exchange live data between the client and the server. It uses the publisher/subscriber pattern where publishers and subscribers interact through channels. Consumers need to initiate and identify the connection on their side. I used ActionCable Provider for React, which can be found here:

https://www.npmjs.com/package/react-actioncable-provider

Action Cable Provider uses a `handleReceivedMessage(response)`
to deal with broadcasted data from the server, which I have implemented as below:

```javascript
//handle broadcasted message
handleReceivedMessage(response){
  //if the id of the chatroom currently displayed is equal to //the chatroom_id of the response, put the response in state.
  //Response is the message broadcasted back to the client
  if( this.state.activeRoom === response.chatroom_id){
    this.setState((prevState) => (
      {
        messages: [...prevState.messages, response]
      })
    )
  }
}
```

***Installation Instructions***

- Clone from my repo running
`git clone https://github.com/estervojko/chat-app.git`
- Run `bundle install` inside the cloned repo
- `cd` into the client folder and run `npm install` to install client dependencies
- Go to `<your_cloned_repo>/client/services/url.js`
- Delete what's there and replace it with this:

``` javascript
export const API_ROOT = 'http://localhost:3000/api';
export const API_WS_ROOT = 'ws://localhost:3001/api/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
```
- Run `rails start` in the terminal to start the development server
