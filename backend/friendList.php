<?php
    include_once "loginPHP/config.php";

    $user = $_SESSION['user_id'];

    $query = "SELECT friends FROM users WHERE username = '{$user}'";
    
    $row =mysqli_fetch_array(mysqli_query($conn,$query));

    $names = str_getcsv($row[0]);

    if($names[0] == NULL){
        echo " <div class=LSBGeneral> You have no friends </div>";
    }
    else
        foreach ($names as $name) {
            echo "<div class='LSBContent' onclick='LoadChats(this)'>{$name}</div>";
        }

?>