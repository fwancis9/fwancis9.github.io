<?php

// indexed
// $arr[] = [1, 2, 3];
$arr = array(1, 2, 3);

// key-ed
$json["key"] = "value";
// $json = array("key" => "value");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hereeeee</title>
</head>
<body>
    <?php echo json_encode ($arr); ?>
    <br><br>
    <?php
        foreach($json as $key => $value) {
            echo $key . ": " . $value;
        }
    ?>
</body>
</html>