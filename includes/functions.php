<?php

    $result = array();

    function getAllModels($conn) {
        $query = "SELECT * FROM tbl_models";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        
        echo (json_encode($result));
    }
