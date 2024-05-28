# Anonity - Global Web-Based Chat Application

## Introduction

Welcome to Anonity, a simple and user-friendly web-based chat application that allows users to send messages to any other user available globally. Built with HTML, CSS, JavaScript, PHP, MySQL, and XAMPP, Anonity aims to provide seamless and instant communication without any FTP features.

## Features

- **Global Messaging**: Send messages to any user available globally.
- **Simple Interface**: Easy-to-use and intuitive design.
- **Real-Time Communication**: Messages are delivered instantly.
- **User Authentication**: Login and registration system.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **Server**: XAMPP

## Installation

Follow these steps to set up Anonity on your local machine:

1. **Download and Install XAMPP**:
   - Download XAMPP from [Apache Friends](https://www.apachefriends.org/index.html) and install it on your machine.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/anonity.git
   cd anonity
   ```

3. **Set Up the Database**:
   - Start XAMPP and ensure Apache and MySQL services are running.
   - Open phpMyAdmin by navigating to `http://localhost/phpmyadmin`.
   - Create a new database named `anonity`.
   - Import the `anonity.sql` file from the project repository to set up the necessary tables.

4. **Configure the Project**:
   - Move the project folder to the XAMPP `htdocs` directory (e.g., `C:\xampp\htdocs\anonity`).
   - Update the database configuration in `config.php`:
     ```php
     <?php
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = "anonity";

     // Create connection
     $conn = new mysqli($servername, $username, $password, $dbname);

     // Check connection
     if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
     }
     ?>
     ```

5. **Run the Application**:
   - Open your web browser and navigate to `http://localhost/anonity`.

## Usage

### Registration

1. Open the application in your browser.
2. Click on the "Register" link.
3. Fill out the registration form with your username, email, and password.
4. Submit the form to create your account.

### SignUp/Login

1. Enter your registered username and password.
2. Click on the "Login" button to access the chat application.

### Sending Messages

1. Once logged in, you will see a list of online users.
2. Select a user to start a chat.
3. Type your message in the input box and press "Send" to communicate in real-time.

## Contributing

We welcome contributions to improve Anonity! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request for review.

Please ensure your code adheres to the project's coding standards and includes appropriate documentation.
e for more details.

## Acknowledgements

- Thanks to the open-source community for providing essential tools and libraries.
- Special thanks to the developers of XAMPP, PHP, MySQL, and all other technologies used in this project.

## Support

If you encounter any issues or have questions, feel free to open an issue on this github repository or contact us directly.

---

Enjoy using Anonity for your global communication needs! 🌍💬
