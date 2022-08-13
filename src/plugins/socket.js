import * as SockJS from 'sockjs-client';
import Stomp from 'stomp-websocket';
const API_URL = process.env.VUE_APP_API_URL

export default function conectionWS() {
    var socket = new SockJS(API_URL+'/socket');
    var stompClient = Stomp.over(socket);
    return stompClient;
}