Real-Time-Chat-Application:-

This is a real-time chat application built using Node.js, Express, and Socket.IO. Users can create chat rooms, join existing rooms, and exchange messages in real time.

Features:-

Real-Time Communication: Messages are sent and received instantly.

Room Creation: Users can create private chat rooms with a room ID and password.

Room Joining: Users can join existing rooms by providing the correct room ID and password.

Responsive Design: The application is fully responsive, working seamlessly on various devices.

How It Works

Create a Room:

A user can create a chat room by entering a room ID and a password. This room ID and password will be used by other users to join the same room.

Join a Room:

Users can join an existing room by entering the correct room ID and password. If the credentials are correct, the user will be able to see the chat messages and interact with others in the room.

Chat:

Once in the room, users can send messages that will be visible to everyone in the room. Messages are updated in real-time without the need to refresh the page.

Exit the Room:

Users can leave the chat room by clicking the "Exit" button.

Prerequisites:-

Before you begin, ensure you have met the following requirements:

Node.js installed on your machine. You can download it from nodejs.org.

Installation To set up and run the project on your local machine, follow these steps:

Clone the repository:


Navigate to the project directory:

       cd realtime-chat-app

cd realtime-chat-app:-

        npm install

Start the server:-

           npm start

Open the application:-

Open your web browser and go to http://localhost:3000.

Dependencies:-

This project uses the following npm packages:

express: A web framework for Node.js.

socket.io: Enables real-time, bidirectional communication between web clients and servers.

You can install these packages using the following command:-

  
    npm install express socket.io

Contributing:-

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Fork the project:-

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request.
