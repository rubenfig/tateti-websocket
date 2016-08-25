var jugador = 1;
var marcado = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var finJuego = false;  
var count = 0;

var webSocket;
var messages = document.getElementById("messages");

//PARTE WEBSOCKET
function openSocket(){
    // Ensures only one connection is open at a time
    if(webSocket !== undefined && webSocket.readyState !== WebSocket.CLOSED){
       writeResponse("WebSocket is already opened.");
        return;
    }
    // Create a new instance of the websocket
    webSocket = new WebSocket("ws://localhost:8080/websocket/chatserver");
     
    /**
     * Binds functions to the listeners for the websocket.
     */
    webSocket.onopen = function(event){
        // For reasons I can't determine, onopen gets called twice
        // and the first time event.data is undefined.
        // Leave a comment if you know the answer.
        if(event.data === undefined)
            return;

        writeResponse(event.data);
    };

    webSocket.onmessage = function(event){
        writeResponse(event.data);
        var elements = document.getElementsByClassName("letter");
        if (finJuego===false){
	    	elements[parseInt(event.data)].innerHTML = 'X';
	    	marcado[parseInt(event.data)] = 1;
	    	comprobarGanador();}
    };

    webSocket.onclose = function(event){
        writeResponse("Connection closed");
    };
}

/**
 * Sends the value of the text input to the server
 */
function send(text){
    webSocket.send(text);
}

function closeSocket(){
    webSocket.close();
}

function writeResponse(text){
    messages.innerHTML += "<br/>" + text;
}

function myFunction(valor) {
    var elements = document.getElementsByClassName("letter");
    var j;
	for (var i = 0; i < elements.length; i++) {
	    if (valor==i.toString() && jugador==1 && marcado[i]===0 && finJuego===false){
	    	elements[i].innerHTML = 'X';
	    	jugador=2;
	    	document.getElementById("turno").innerHTML = jugador;
	    	marcado[i] = 1;
	    	webSocket.send(i);
	    	comprobarGanador();
	    		    	
	    }
	  	else if (valor==i.toString() && jugador==2 && marcado[i]===0 && finJuego===false){
	  		elements[i].innerHTML = 'O';
	  		jugador = 1;
	  		document.getElementById("turno").innerHTML = jugador;
	  		marcado[i] = 2;
	  		webSocket.send(i);
	  		comprobarGanador();
	  		
	  	}
	}
	if (finJuego===false){
		comprobarGanador();	
	}
}

//PARTE TA-TE-TI
function comprobarGanador() {
	if (marcado[0]==marcado[1] && marcado[1]==marcado[2] && marcado[0]!==0){
		if (marcado[0]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[0]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[0]==marcado[3] && marcado[3]==marcado[6] && marcado[0]!==0){
		if (marcado[0]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[0]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[0]==marcado[4] && marcado[4]==marcado[8] && marcado[0]!==0){
		if (marcado[0]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[0]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[2]==marcado[5] && marcado[5]==marcado[8] && marcado[2]!==0){
		if (marcado[2]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[2]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[6]==marcado[7] && marcado[7]==marcado[8] && marcado[6]!==0){
		if (marcado[6]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[0]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[1]==marcado[4] && marcado[4]==marcado[7] && marcado[1]!==0){
		if (marcado[1]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[1]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	} else if (marcado[3]==marcado[4] && marcado[4]==marcado[5] && marcado[3]!==0){
		if (marcado[3]==1){
			alert("El ganador es el Player: 1");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		} else if (marcado[3]==2){
			alert("El ganador es el Player: 2");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';
		}
		finJuego = true;
	}else{
			
		for (var j=0;j<9; j++)
		{
			if (marcado[j]!==0){
				count++;
			}
		}
		console.log(count);
		if (count==9)
		{
			alert("Empate!");
			document.getElementById("again").innerHTML = 'Click aqui para jugar de nuevo!';	
			finJuego = true;
		}
		count=0;
	}
}
