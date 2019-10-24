<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
    'SELECT p.personID, p.firstName, p.lastName, j.radio, j.stationID, p.email
FROM People p, JobRecords j
WHERE p.personID = j.personID;'
);
$stmt->execute();
$people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
