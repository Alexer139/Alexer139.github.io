<?php
$servername = "localhost";
$username = "пользователь";
$password = "пароль";
$dbname = "имя_базы_данных";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$sql = "SELECT * FROM messages";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo "<p>" . $row['message'] . "</p>";
  }
} else {
  echo "Нет сохраненных сообщений";
}

$conn->close();
?>