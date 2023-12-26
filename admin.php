<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include_once "backend/config.php";
    if (isset($_POST["delete"])) {
        // Handle delete action
        $selectedUsers = $_POST["selected_users"];
        foreach ($selectedUsers as $data) {
            $data = explode("@$:$@",$data);
            mysqli_query($conn, "DELETE FROM users where username = '{$data[0]}'");
        }
    } elseif (isset($_POST["modify"])) {
        $sql = "UPDATE users SET username = '{$_POST['newusername']}', email = '{$_POST['email']}', password = '{$_POST['password']}' WHERE username = '{$_POST['oldusername']}'";
        mysqli_query($conn, $sql);
    }
}
// else{
//     http_response_code(403);
//     echo "Access denied!";
//     exit;
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <h2>User Management</h2>
    <form action="admin.php" method="post">
        <table>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    include_once "backend/config.php";
                    $users = mysqli_query($conn, "SELECT * FROM users");

                    foreach ($users as $user) {
                        echo '<tr>';
                        echo '<td><input type="checkbox" name="selected_users[]" onclick="fillFrm(this)" value="' . $user['username'] . "@$:$@" . $user['email'] . "@$:$@" . $user['password'] . '"></td>';
                        echo '<td>' . $user['username'] . '</td>';
                        echo '<td>' . $user['email'] . '</td>';
                        echo '<td>' . $user['password'] . '</td>';
                        echo '</tr>';
                    }
                ?>
            </tbody>
        </table>
        <br>
        <button type="submit" name="delete">Delete Selected</button>
    </form>

    <br><br>

    <form action="admin.php" method="post" id="modifyFrm">
        <label for="username">Old Username:</label>
        <input type="text" id="username" name="oldusername" required readonly>

        <label for="username">New Username:</label>
        <input type="text" id="username" name="newusername" required>

        <label for="email">New Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">New Password:</label>
        <input type="text" id="password" name="password" required>
        <br>
        <button type="submit" name="modify">Modify</button>
    </form>

    <script>
        function fillFrm(row){
            let ModFrm = document.getElementById("modifyFrm")
            let data = row.value.split("@$:$@")
            if(row.checked){
                ModFrm[0].value = data[0]
                ModFrm[1].value = data[0]
                ModFrm[2].value = data[1]
                ModFrm[3].value = data[2]
            }
            else{
                ModFrm[0].value = ""
                ModFrm[1].value = ""
                ModFrm[2].value = ""
                ModFrm[3].value = ""
            }
        }
    </script>
</body>
</html>
