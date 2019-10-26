<?php

// Step 0: Validate the incoming data
 // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query



$stmt = $db->prepare(
  'DELETE FROM People
  where personID = ?;'
);

$stmt->execute([
  $_POST['personID']
]);

$personID = $_POST['personID'];

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?personID=' . $personID);
