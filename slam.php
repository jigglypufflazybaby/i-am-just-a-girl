<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "slambook";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$category = $_POST['category'];
$name = $_POST['name'];
$description = $_POST['description'];

$sql = "INSERT INTO entries (category, name, description) VALUES ('$category', '$name', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
