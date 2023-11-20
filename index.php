<?php
    session_start();
    if(!isset($_SESSION['user_id'])){
        header("location: ./login.html");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Anonity</title>
</head>

<body>
    <div class="Main">
        <div class="LeftSideBar">
            <div id="TitleBox">
                <!-- Add image here -->
                <!-- <img src="Imgs/MsgIcon.png" alt="" style=" width: 3rem; background-    color: transparent;"> -->
                <!-- <h1 id="MainTitle">Anonity</h1> -->
                <h1 id="MainTitle"><?php echo"{$_SESSION['user_id']}" ?></h1>
            </div>
            <div class="NamesBox">
                <div class='LSBContent' style="padding: 0; justify-content:space-around;">
                    <div class="LSBContentItemBox" id="addBtn"><img src="Imgs/add.png" alt="add"  class='LSBContentItem'></div>
                    <div class="LSBContentItemBox" id="friendsBtn"><img src="Imgs/friends.png" alt="friends"  class='LSBContentItem'></div>
                    <div class="LSBContentItemBox" id="msgBtn"><img src="Imgs/msg.png" alt="messages"  class='LSBContentItem'></div>
                </div>

                <div id="msg">

                </div>

                <div id="friends" style="display: none;">
                    <?php
                        include_once "backend/friendList.php";
                    ?>
                </div>

                <div id="add">

                </div>
                
                
            </div>

        </div>


        <div class="TextBox">
            <div class="TBHeader">
                <div id="ProfileImg"></div>
                <div id="TBHName"></div>
            </div>
            <div class="MessageContainer" id="MsgContainer">
            

            </div>

            <div class="Message">
                <div class="Plus"></div>
                <div class="Emoji" onclick="EmojiDivDisplay()">
                    <div id="EmojiBox" style="display: none;">
                        
                    </div>
                </div>
                <input type="text" class="MInput" id="MsgInputBox" placeholder="Enter something..." />
                <div class="Send" onclick="SendMsg()"></div>
            </div>
        </div>
    </div>
    <script src="index.js"></script>
</body>

</html>