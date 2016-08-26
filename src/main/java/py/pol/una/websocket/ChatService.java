package py.pol.una.websocket;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/chatserver")
public class ChatService {
	
	private static Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());
	
	@OnOpen
    public void onOpen(Session session){
        System.out.println(session.getId() + " has opened a connection"); 
        try {
        	peers.add(session);
            session.getBasicRemote().sendText("Connection Established");
            for (Session peer : peers) {
                if (!peer.equals(session)) {
                	System.out.println("Enviando abierto:"+session.getId()+" a " + peer.getId());
                    peer.getBasicRemote().sendText("abierto:"+session.getId());
                    session.getBasicRemote().sendText("abierto:"+peer.getId());
                }
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
	
	@OnClose
    public void onClose (Session peer) throws IOException {
		System.out.println(peer.getId() + " has closed a connection"); 
		for (Session p : peers) {
            if (!p.equals(peer)) {
            	System.out.println("Enviando mensaje a " + p.getId());
                p.getBasicRemote().sendText("cerrado:"+peer.getId());
            }
        }
        peers.remove(peer);
    }
	
	 @OnMessage
	 public void broadcastFigure(String mensaje, Session session) throws IOException {
		 String[] partes = mensaje.split(":");
		 System.out.println(partes[0] );
		 if (partes[0].equals("jugar_servidor")){
			 System.out.println(partes[0] );
			 for (Session peer : peers) {
		            if (peer.getId().equals(partes[1])) {
		            	System.out.println("Enviando mensaje a " + peer.getId());
		                peer.getBasicRemote().sendText("jugar:"+session.getId());
		            }
		        }
		 }else if (partes[0].equals("confirmado_servidor")){
			 for (Session peer : peers) {
		            if (peer.getId().equals(partes[1])) {
		            	System.out.println("Enviando mensaje a " + peer.getId());
		                peer.getBasicRemote().sendText("confirmado:"+session.getId());
		            }
		        }
		 }else if (partes[0].equals("jugada_servidor")){
			 for (Session peer : peers) {
		            if (peer.getId().equals(partes[2])) {
		            	System.out.println("Enviando mensaje a " + peer.getId());
		                peer.getBasicRemote().sendText("jugada:"+partes[1]+":"+session.getId());
		            }
		        }
		 }else {
			 
			 System.out.println("broadcast message: " + mensaje + ". Peers #: " + peers.size());
	        
	        for (Session peer : peers) {
	            if (!peer.equals(session)) {
	            	System.out.println("Enviando mensaje a " + peer.getId());
	                peer.getBasicRemote().sendText(mensaje);
	            }
	        }
		 }
    }
}
