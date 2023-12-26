<?php
    include_once "config.php";

    $query = "SELECT username FROM users ORDER BY username ASC";
    
    $res =mysqli_query($conn,$query);

    while ($row = mysqli_fetch_array($res)){
        // if($row[0] != $_POST['username'])                // FIX THIS!!
            echo "<div class='LSBContent' onclick='LoadChats(this)'>{$row[0]}</div>";
    }

?>