<?php

// Step 0: Validate the incoming data
 // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query


$stmt = $db->prepare(
  'UPDATE People
  SET firstName = ?, lastName= ?, email=?, radio=?, stationName=?, gender = ?, dob = ?, address = ?, position = ?, phoneNumber = ?
  where personID = ?;'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['email'],
  $_POST['radio'],
  $_POST['stationName'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['address'],
  $_POST['position'],
  $_POST['phoneNumber'],
  $_POST['personID']
]);

$personID = $_POST['personID'];

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?personID=' . $personID);
