<!DOCTYPE html>
 
<html>
    <head>
		<title>TP1-Front/End</title>
		<link rel="stylesheet" type="text/css" href="stylo.css">
	</head>
    <body>
       
        <div class="container-center">
			<h1>TA-TE-TI GAME!</h1>
		</div>

		<div id="general">
			<div class="casilla" onClick="myFunction('0')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('1')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('2')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('3')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('4')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('5')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('6')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('7')">
				<p class="letter"></p>
			</div>
			<div class="casilla" onClick="myFunction('8')">
				<p class="letter"></p>
			</div>
		</div>

		<div class="container-center">
   			<button type="button" onclick="openSocket();" >Jugar!</button>
			<h5>Turno del Player:</h5>
			<h3 id="turno">1</h3>
			<h2 id="again" onClick="location.reload();"></h2>
		</div>
		
		<div>
            <input type="text" id="messageinput"/>
        </div>
        <div>
            <button type="button" onclick="closeSocket();" >Ya no quiero jugar porque soy cagon</button>
        </div>
        <!-- Server responses get written here -->
        <div id="messages"></div>
        <script type="text/javascript" src="script.js"></script>
        
    </body>
</html>
