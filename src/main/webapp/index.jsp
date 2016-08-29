<!DOCTYPE html>
 
<html >
    <head>
		<title>TP1-Front/End</title>
		<link rel="stylesheet" type="text/css" href="stylo.css">
	</head>
    <body background= "ric.jpg">
       <div class="container-center">
				<h1>TA-TE-TI GAME!</h1>
				<br>
				<div id="divName">
						<h3> Ingrese su nombre:</h3>
						<input type="text" id="myName" placeholder="Solo letras, sin espacios." onkeydown="miNombre(this)">
				</div>
				<br><br>
		</div>
       
       <div id="juego" style="display:none;">
	        
	
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
				<br><br>
				<h5>Turno del Player:</h5>
				<h3 id="turno">1</h3>
			</div>
			
	        <div class="container-center">
	        	<br><br>
	        	<br><br>    
	            <button type="button" onclick="closeSocket(); mostrarcasilla();location.reload();" >Abandonar partida</button>
	        </div>
	        <!-- Server responses get written here -->
	        
	        
        </div>
        <div class="container-center">
        	<div id="conectar1"></div>
        	<div id="confirmar" style="display:none;" class="container-center">
        	</div>
        	<div id="menu" style="display:none;" class="container-center">
        	</div>
        	
        </div>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
