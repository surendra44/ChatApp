import { Injectable } from '@angular/core';
import  {io} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {

private socket;
constructor() {
    this.socket = io('http://localhost:8080');
}
newUser(newusername:any){
  this.socket.emit('new-user-joined',newusername)
    console.log(newusername);
  }
  listenmsg(){
  this.socket.on('receive', (data) => {
    console.log(data);
  });
  }
  sendmsg(data:any){ 
    console.log(data.value,'input msg')
    this.socket.emit('send', data.value);
  }
}
