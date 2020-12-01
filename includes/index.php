<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        $targetID = $_GET["id"];
        $result = getSingleModel($pdo, $targetID);
        return $result;
        
    } else {
        $allModels = getAllModels($pdo);
        return $allModels;
    } 