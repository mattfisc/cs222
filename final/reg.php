<?php

// create member
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$pwd= $_POST['pwd'];


//$mysqli = new mysqli("localhost","mattfisc","runlift100%","cs222");
$mysqli = new mysqli("localhost","root","","cs222");

if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// TEST IF MEMBER EXISTS BY EMAIL
$test = "SELECT * FROM `fitnesssignup` WHERE Email = '$email' ";


// TEST
$check = mysqli_query($mysqli,$test);

// NUMBER OF ROWS IN QUERY FOUND
$num = mysqli_num_rows($check);

// EMAIL TAKEN REGISTRATION ERROR
if($num == 1){
  header('location:f_p2.php?message=emailerror');// TRY AGAIN

}
else{
  
  // QUERY STRING
  $createMember = "INSERT INTO fitnesssignup (`FirstName`, `LastName`, `Email`, `Pass`) VALUES ('".$firstName."','".$lastName."','".$email."','".$pwd."')";

  // CREATE MEMBER TRUE
  if ($mysqli->query($createMember) === TRUE) {
    // SUCCEESS
    header('location:f_p1.php?message=created');
  } 
  // CREATE MEMBER FALSE
  else {
    header('location:f_p2.php?message=fail');
    

  }
}

?>