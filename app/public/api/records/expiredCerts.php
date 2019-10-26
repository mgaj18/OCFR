<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
  $stmt = $db->prepare('SELECT * FROM People join CertDetails join Certifications where People.personID=CertDetails.personID and Certifications.certificateID=CertDetails.certificateID and now()<CertDetails.expDate');
  $stmt->execute();
  $people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
