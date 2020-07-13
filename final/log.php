<?php


// FIRST PAGE
$email = $_POST['userEmail'];
$pwd = $_POST['userPwd'];

//$mysqli = new mysqli("localhost","mattfisc","runlift100%","cs222");
$mysqli = new mysqli("localhost","root","","cs222");
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// TEST IF MEMBER EXISTS BY EMAIL
// $test = "SELECT * FROM `fitnesssignup` WHERE Email = '$email' "; works
$test = "SELECT Email, Pass FROM `fitnesssignup` WHERE Email = '$email'";

// TEST
$check = $mysqli->query($test);

// LOGIN IN MEMBER
if($check->num_rows > 0){
    while($row = $check->fetch_assoc()){

        // FIND CORRECT EMAIL WITH PASSWORD
        if($row['Email']=== $email && $row['Pass']=== $pwd){
            // MEMBER EXISTS
            header('location:f_p3.php?message=success');
            
        }
        else{
            header('location:f_p1.php?message=error');
        }
    }
}
else{
    // MEMBER DOES NOT EXIST
    header('location:f_p1.php?message=fail');
}

?>