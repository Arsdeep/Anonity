<?php
    include_once "config.php";
    $name = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $userList = mysqli_query($conn, "SELECT * FROM users where username = '{$name}'");
    if(mysqli_num_rows($userList) > 0){
        echo "User already exists";
    }
    else{
        $userList = mysqli_query($conn, "INSERT into users (username,password,email) values('{$name}','{$pass}','{$email}')");
        echo "Created";
    }
?>