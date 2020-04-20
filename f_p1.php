<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Page</title>
    <link rel="stylesheet" href="f.css">
</head>
<body>
    <!--PAGE ONE-->
    <div class="page" >
        <div class="header">
            <h1>Login Page</h1>
        </div>
        
        <div class="content">
            <!--DISPLAY MESSAGE-->
            
            <div id="m">
            
                <?php
                    //$fullUrl = "http://$SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                    $url = "http://localhost:$_SERVER[REQUEST_URI]";

                    $index =strpos($url, "message");
                    $substr = substr($url,$index);

                    // Message exists
                    if(strcmp($substr,$url) != 0){

                        // LOGIN IN SUCCESS
                        if(strcmp($substr, "message=created") == 0){
                            echo "<div id=messageImg></div>";
                            echo "<p class='message'>Created Member Record!<p>";

                        }
                        // LOGIN FAILED
                        else if(strcmp($substr, "message=fail") == 0){
                            echo "<div id=errorImg></div>";
                            echo "<p class='error'>Failed to login. Try to register first.<p>";
                        
                        }
                        // LOGIN FAILED
                        else if(strcmp($substr, "message=error") == 0){
                            echo "<div id=errorImg></div>";
                            echo "<p class='error'>Failed to login. Email or Password is incorrect!.<p>";

                        }
                        else{
                            echo"nothing";
                        }
                    }
                    // LOADING PAGE DEFAULT
                    else{
                        echo "<p>Register or Login!<p>";
                        
                    }
                ?>
            </div>

            <form action="log.php" method="post">

                <input type="text" name="userEmail" id="userEmail" placeholder="Email" required><br>
                <input type="password" name="userPwd" id="userPwd" placeholder="Password" required><br>

                <!--SUBMIT BUTTON -->
                <br>
                <input class="button" type="submit" value="Login">
            </form>

            
            <!--SIGN UP BUTTON-->
            <button class="button"><a href="f_p2.php">Sign Up</a></button><br><br>

            <!--ENTER PASSWORD-->
            <div>
                <table>
                    <tr>
                        <td><button onclick="addDigitToPassword(7)"> 7 </button></td>
                        <td><button onclick="addDigitToPassword(8)"> 8 </button></td>
                        <td><button onclick="addDigitToPassword(9)"> 9 </button></td>
                    </tr>
                    <tr>
                        <td><button onclick="addDigitToPassword(4)"> 4 </button></td>
                        <td><button onclick="addDigitToPassword(5)"> 5 </button></td>
                        <td><button onclick="addDigitToPassword(6)"> 6 </button></td>
                    </tr>
                    <tr>
                        <td><button onclick="addDigitToPassword(1)"> 1 </button></td>
                        <td><button onclick="addDigitToPassword(2)"> 2 </button></td>
                        <td><button onclick="addDigitToPassword(3)"> 3 </button></td>
                    </tr>
                    <tr>
                        <td><button onclick="addDigitToPassword(0)">0 </button></td>
                        <!--DELETE BUTTON-->
                        <td><button onclick="deleteOneDigit()">Delete</button></td>
                        <!--CLEAR BUTTON-->
                        <td><button onclick="clearPassword()">Clear</button></td>
                    </tr>
                </table>
            </div> 
        </div>
    </div>
        
    <script src="f.js"></script>
    
    <script src = "https://code.jquery.com/jquery-1.11.3.min.js"></script>

</body>
</html>