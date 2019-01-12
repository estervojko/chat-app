***Chat App using Web Sockets.***

*Link to the deployed project:*

https://chat-app-ester.herokuapp.com/

This chat application concept is a full-stack CRUD, that is built with React and Ruby on Rails. It demonstrates learning, using and integrating various technologies in a short period of time. Users can login in using the credentials below:

 username: gates@gmail.com
 password: test

Users have to login before they can post. After being logged in users are directed to the profile page, where they can update their profile picture. The chatroom button will take you on the chatrooms screen. On the left, logged in users can click on a chatroom, and the message interactions between the participating users will be displayed on the right, where they can also choose to post a message.

When clicking post, the Action Cable feature of Ruby on Rails will broadcast that message live on all the users currently viewing that chatroom.

***Technologies Used***

- React
- Semantic UI
- Ruby on Rails

***Features List***

- Login/Logout
- Users can view their profile and change their profile picture
- Users can post other messages

***Entity-Relationship Diagram***

A user has many messages and and a message belongs to a user. A chatroom has many messages and a message belongs to a chatroom.

![Entity-Relationship Diagram](https://github.com/estervojko/chat-app/blob/master/assets/_Entity%20Relationship%20Diagram%20Example.jpeg?raw=true)
