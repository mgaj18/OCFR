<?php

// Step 0: Validate the incoming data
 // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query

if (isset($_POST['edit'])){

$stmt = $db->prepare(
  'UPDATE People
  SET firstName = ?, lastName= ?, email=?, radio=?, stationName=?
  where personID = ?;'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['email'],
  $_POST['radio'],
  $_POST['stationName'],
  $_POST['personID']
]);

}
else if (isset($_POST['delete']))
{
  $stmt = $db->prepare(
    'DELETE FROM People
    where personID = ?;'
  );

  $stmt->execute([
    $_POST['personID']
  ]);
}

$personID = $_POST['personID'];

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?personID=' . $personID);
