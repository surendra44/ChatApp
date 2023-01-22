import { Component } from '@angular/core';
import  {io} from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  messages =[]
  newusername = prompt('enter user name')
  private socket;
  constructor() {
      this.socket = io('http://localhost:8000');
  }
  newUser(){
  this.socket.emit('new-user-joined', this.newusername)
    console.log(this.newusername);
  
  }
  listenmsg(){
  this.socket.on('receive', (data) => {
    console.log(data);
  });
  }
  sendmsg(data:any){
    console.log(data,'input msg')
    this.socket.emit('send', data);
  }

}
