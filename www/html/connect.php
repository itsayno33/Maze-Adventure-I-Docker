<?php 
    try {
        $dsn = 'mysql:host=sql;dbname=db_mai;charset=utf8mb4';
        $db = new PDO($dsn, 'itsayno33', 'PE333833');

        $sql = 'SELECT version();';
        $contact = $db->prepare($sql);
        $contact->execute();
        $result = $contact->fetchAll(PDO::FETCH_ASSOC);
        var_dump($result);
    } catch (PDOException $e) {
        echo $e->getMessage();
        exit;
    }
?>
