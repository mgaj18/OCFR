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
    WHERE Certifications.certName= ?'

);
$stmt->execute([
   $_POST['certName']
    ]);

$certName = $stmt->fetchAll();

$json = json_encode($certName, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;