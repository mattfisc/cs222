<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Member Page</title>
    <link rel="stylesheet" href="f.css">
</head>
<body>
    
    <!--PAGE THREE-->
    <div class="page"  >

        <div class="header">
            <h1 id="welcome"> Welcome new Member</h1>
        </div>

        <div class="content">

            <div id="m">
            <?php
                    //$fullUrl = "http://$SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                    $url = "http://localhost:$_SERVER[REQUEST_URI]";

                    // FAILED TO REGISTER
                    if(strpos($url, "message=success") == true){
                        echo "<p class='message'>Login successful.<p>";
        
                    }
                ?>

            </div>

            Muscle Group:<br>
            <select name="muscleInput" id="muscleInput">
                <option value="Calves">Calves</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Hamstrings">Hamstrings</option>
                <option value="Gluteus">Gluteus</option>
                <option value="Hips">Hips</option>
                <option value="Lower Back">Lower Back</option>
                <option value="Lats">Lats</option>
                <option value="Trapezius">Trapezius</option>
                <option value="Abdominals">Abdominals</option>
                <option value="Pectorals">Pectorals</option>
                <option value="Deltoids">Deltoids</option>
                <option value="Triceps">Triceps</option>
                <option value="Biceps">Biceps</option>
            </select>
            
            <!--Button-->
            <button id="btn" class="button" onclick="submit()">Select Muscle</button>

            <p id="displayMuscleGroup"></p>
        </div>
            
    </div>

    <script src="f.js"></script>
    
    <script src = "https://code.jquery.com/jquery-1.11.3.min.js"></script>


</body>
</html>