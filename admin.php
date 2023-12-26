<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>User Management</h2>
    <form action="process.php" method="post">
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    // Fetch user records from the database and populate the table
                    // Replace this part with your actual database connection and query
                    $users = mysqli_query($conn, "SELECT * FROM users");

                    foreach ($users as $user) {
                        echo '<tr>';
                        echo '<td><input type="checkbox" name="selected_users[]" value="' . $user['username'] . '"></td>';
                        echo '<td>' . $user['email'] . '</td>';
                        echo '<td>' . $user['password'] . '</td>';
                        echo '</tr>';
                    }
                ?>
            </tbody>
        </table>
        <br>
        <button type="submit" name="delete">Delete Selected</button>
        <button type="submit" name="modify">Modify Selected</button>
    </form>
</body>
</html>
