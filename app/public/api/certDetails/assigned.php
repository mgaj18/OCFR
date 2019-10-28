<?php

// Step 0: Validate the incoming data
 // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query

$stmt = $db->prepare(
  'INSERT INTO CertDetails (certificateID, personID, acquireDate, expDate)
  VALUES (?, ?, ?, ?);'
);

$stmt->execute([
  $_POST['certificateID'],
  $_POST['personID'],
  $_POST['acquireDate'],
  $_POST['expDate']
]);

$certificateID = $db->lastInsertID();

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../certDetails/?certificateID=' . $certificateID'?personID=' . $personID');
