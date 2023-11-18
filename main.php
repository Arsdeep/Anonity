<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>Anonity</title>
</head>

<body>
    <div class="Main">
        <div class="LeftSideBar">
            <div id="TitleBox">
                <!-- Add image here -->
                <!-- <img src="Imgs/MsgIcon.png" alt="" style=" width: 3rem; background-    color: transparent;"> -->
                <h1 id="MainTitle">Anonity</h1>
            </div>
            <div class="NamesBox">
                <div class="LSBContent" onclick="LoadChats(this)">Alex</div>
                <div class="LSBContent" onclick="LoadChats(this)">Rose</div>
                <div class="LSBContent" onclick="LoadChats(this)">William</div>
                <div class="LSBContent" onclick="LoadChats(this)">Beethoven</div>
                <div class="LSBContent" onclick="LoadChats(this)">Alex</div>
                <div class="LSBContent" onclick="LoadChats(this)">Rose</div>
                <div class="LSBContent" onclick="LoadChats(this)">William</div>
                <div class="LSBContent" onclick="LoadChats(this)">Beethoven</div>
                <div class="LSBContent" onclick="LoadChats(this)">Alex</div>
                <div class="LSBContent" onclick="LoadChats(this)">Rose</div>
                <div class="LSBContent" onclick="LoadChats(this)">William</div>
                <div class="LSBContent" onclick="LoadChats(this)">Beethoven</div>
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
    <script src="msgs.js"></script>
</body>

</html>