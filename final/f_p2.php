<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registration Page</title>
    <link rel="stylesheet" href="f.css">
</head>
<body>
    
<!--PAGE TWO-->
    <div class="page">

        <div class="header">
            <h1>Sign-up</h1>
        </div>

        <div class="content">

            <div id="m">

                <?php

                    //$fullUrl = "http://$SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                    $url = "http://localhost:$_SERVER[REQUEST_URI]";
                    
                    $index =strpos($url, "message");
                    $substr = substr($url,$index);

                    // Message exists
                    if(strcmp($substr,$url) != 0){
                        
                        // FAILED TO REGISTER
                        if(strcmp($substr, "message=fail") == 0){
                            echo "<div id=errorImg></div>";
                            echo "<p class='error'>Failed to register.<p>";
            
                        }
                        // FAILED TO REGISTER EMAIL TAKEN
                        else if(strcmp($substr, "message=emailerror") == 0){
                            echo "<div id=errorImg></div>";
                            echo "<p class='error'>Failed to register.  Email is already used.<p>";
                        }
                        else
                            echo "error in message";
                    }
                    // DEFAULT LOAD
                    else{
                        echo "<p class='message'>Register here!<p>";
                    }
                ?>
            </div>


            <form action="reg.php" method="post">

               
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required><br>

               
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required><br>

                
                <input type="text" id="email" name="email" placeholder="Email Address" required><br>

            <br><br>
                <input type="password" id="pwd" name="pwd" placeholder="Password (numberic values only):" required>

                <br><!--Button--><br>
                <input class="button" type="submit" value="Submit">

            </form>
        </div>
    </div>


    
    <script src="f.js"></script>
    
    <script src = "https://code.jquery.com/jquery-1.11.3.min.js"></script>


</body>
</html>