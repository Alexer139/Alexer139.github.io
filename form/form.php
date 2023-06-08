<?php
// Подключение к базе данных
$servername = "localhost";
$username = "пользователь";
$password = "пароль";
$dbname = "имя_базы_данных";
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получение ответа из формы
$answer = $_POST['answer'];

// Подготовка и выполнение запроса на сохранение ответа
$sql = "INSERT INTO answers (answer) VALUES ('$answer')";
if ($conn->query($sql) === TRUE) {
    echo "Ответ сохранен успешно";
} else {
    echo "Ошибка при сохранении ответа: " . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>





<?php
// Подключение к базе данных
$servername = "localhost";
$username = "пользователь";
$password = "пароль";
$dbname = "имя_базы_данных";
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Выборка всех ответов из базы данных
$sql = "SELECT answer FROM answers";
$result = $conn->query($sql);

// Отображение ответов других пользователей
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row['answer'] . "<br>";
    }
} else {
    echo "Пока нет ответов";
}

// Закрытие соединения с базой данных
$conn->close();
?>