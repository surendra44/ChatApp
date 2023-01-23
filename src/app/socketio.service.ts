import { Injectable } from '@angular/core';
import  {io} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {
messages:any = []
username:any;
public socket;
constructor() {
    this.socket = io('http://localhost:8000');
  }
  newUser(newusername:any){
    this.socket.emit('new-user-joined',newusername)
    console.log(newusername);
  }
  
  
  sendmsg(data:any){ 
    console.log(data.value,'input msg')
    this.socket.emit('send', data.value);
  }
}
