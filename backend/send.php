<?php
    include_once "config.php";

    $x = 0;

    $postData = file_get_contents("php://input");
    
    $data = json_decode($postData, true);

    $query = "SELECT * FROM chats WHERE users = '{$data["username"]}/{$data["othername"]}'";
    $query2 = "SELECT * FROM chats WHERE users = '{$data["othername"]}/{$data["username"]}'";
    
    $result = mysqli_query($conn,$query);
    
    if(mysqli_num_rows($result) == 0){
        $result = mysqli_query($conn,$query2);
        $x = 1;
    }
    
    if(mysqli_num_rows($result) == 0){
        echo"Error @ send.php line 21";
    }
    else{
        $row = mysqli_fetch_row($result);
        if($row[1] == ""){
            if($x == 0){
                $updateQuery ="UPDATE chats SET chatdata = '{$data["username"]}@$:$@{$data['text']}' WHERE users = '{$data["username"]}/{$data["othername"]}';";
            }else{
                $updateQuery ="UPDATE chats SET chatdata = '{$data["username"]}@$:$@{$data['text']}' WHERE users = '{$data["othername"]}/{$data["username"]}';";
            }
        }
        else{
            if($x == 1){     
                $newData = $row[1] . "," . $data["username"] . "@$:$@" . $data['text'];
                $updateQuery ="UPDATE chats SET chatdata = '{$newData}' WHERE users = '{$data["othername"]}/{$data["username"]}';";
            }else{
                $newData = $row[1] . "," . $data["username"] . "@$:$@" . $data['text'];
                $updateQuery ="UPDATE chats SET chatdata = '{$newData}' WHERE users = '{$data["username"]}/{$data["othername"]}';";
            }
        }
    }

    mysqli_query($conn,$updateQuery);
    
?>