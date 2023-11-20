<?php
    include_once "config.php";

    $postData = file_get_contents("php://input");
    
    $data = json_decode($postData, true);

    $query = "SELECT chatdata FROM chats WHERE users = '{$data["username"]}/{$data["othername"]}'";
    $query2 = "SELECT chatdata FROM chats WHERE users = '{$data["othername"]}/{$data["username"]}'";

    $result = mysqli_query($conn,$query);

    if(mysqli_num_rows($result) == 0){
        $result = mysqli_query($conn,$query2);
    }

    if(mysqli_num_rows($result) == 0){
        echo"Error";                        // ADD automatic Chat database creation as existing not found;
    }
    else{
        $chatdata = mysqli_fetch_array($result)['chatdata'];
        echo "$chatdata";
    }

    
?>