<?php

// Step 0: Validate the incoming data
 // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query


$stmt = $db->prepare(
  'UPDATE Certifications
  SET certName = ?, agency = ?, certificationLength=?
  where certificateID = ?;'
);

$stmt->execute([
  $_POST['certName'],
  $_POST['agency'],
  $_POST['certificationLength'],
  $_POST['certificateID']
]);

$certificateID = $_POST['certificateID'];

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?certificateID=' . $certificateID);
