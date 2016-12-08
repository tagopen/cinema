<?php

if ($_POST["form"]) {
  $template = htmlspecialchars($_POST["form"]);
  $form = "Форма: ".htmlspecialchars($_POST["form"])."<br/>";
} else {
  $template = false;
  $form = false;
}
if ($_POST["name"]) {
  $user_name = "Имя: " . htmlspecialchars($_POST["name"]) . "<br/>";
} else {
  $user_name = false;
}
if ($_POST["phone"]) {
  $user_phone = "Телефон: " . htmlspecialchars($_POST["phone"]) . "<br/>";
} else {
  $user_phone = false;
}
if ($_POST["email"]) {
  $user_email = "Почта: " . htmlspecialchars($_POST["email"]) . "<br/>";
} else {
  $user_email = false;
}
if ($_POST["message"]) {
  $user_message = "Сообщение: " . htmlspecialchars($_POST["message"]) . "<br/>";
} else {
  $user_message = false;
}

$source =  $user_name . $user_phone . $user_message . $user_email;

$headers = "MIME-Version: 1.0\r\n";

$headers .= "Content-type: text/html; charset=utf-8\r\n";
$result = mail('forzennn@gmail.com, website4you.dp@gmail.com', "Хутор - " .$template, $source, $headers);

if ($result) {
  header("Location: ../thanks.html");
} else {
  header("Location:index.html?status=false");
}
?>