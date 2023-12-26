<?php
    include_once "config.php";
    $name = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $userList = mysqli_query($conn, "SELECT * FROM users where username = '{$name}'");

    $user = mysqli_fetch_array($userList);

    if($name == "admin" && $pass == "123"){
        echo "admin login";
    }
    else if($user == NULL){
        echo "user doesnt exist";
    }
    else if($user['password'] == $pass){
        session_start();
        $_SESSION['user_id'] = $user['username'];
        echo "Successful Login";
    }
    else if($user['password'] != $pass){
        echo "Wrong Pass";
    }
    else{
        echo "Error";
    }
?>