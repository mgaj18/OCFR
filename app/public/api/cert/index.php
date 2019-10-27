<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
if (isset($_GET['certificateID'])) {
  $stmt = $db->prepare(
    'SELECT *
    FROM Certifications
    WHERE certificateID = ?;'
  );
  $stmt->execute([$_GET['certificateID']]);
} else {
  $stmt = $db->prepare('SELECT * from Certifications;');
  $stmt->execute();
}
$people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;


/* SELECT p.personID, p.firstName, p.lastName, max(jr.radio) as radio, p.email, s.stationName
  from People p LEFT JOIN Station s JobRecords jr
  ON p.personID = jr.personID
  LEFT JOIN JobRecords jr
  ON
  where p.personID = jr.personID and jr.stationID = s.stationID
  group by p.personID;' */
