<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
    'SELECT People.personID, CONCAT(People.firstName, \' \', People.lastName) AS Name, IF(now() < CertDetails.expDate, \'Valid\', \'Expired\') as Status
    FROM
        People
            join CertDetails
                on People.personID=CertDetails.personID
            join Certifications
                on CertDetails.certificateID=Certifications.certificateID
    WHERE Certifications.certName=\'Extrication\';'
);
$stmt->execute();
$people = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($people, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;