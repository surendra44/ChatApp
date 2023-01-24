import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import  {io} from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'chatApp';
  messages:any=[]
  msgdata:any=[]
  
  public socket;
  constructor() {
    this.socket = io('http://localhost:8000');
  }
  ngOnInit(): void {
    let newusername = prompt('enter your name')
    this.socket.emit('new-user-joined',newusername)
    // console.log(newusername);
  }
  sendmsg(data:any){ 
    // console.log(data.value,'input msg')
    this.socket.emit('send', data.value);
    this.msgdata.push(data.value)
    // console.log(this.msgdata,'sent msgs')
  }
 
  ngAfterViewInit(): void {
    this.socket.on('user-Joined',(data:any)=>{
      // console.log(data,'message received')
      this.messages.push(data)
      // console.log(this.messages)
    })
    this.socket.on('receive',(data:any)=>{
      // console.log(data,'message received')
      this.messages.push(data)
      // console.log(this.messages)
    })
    this.socket.on('left',(data:any)=>{
      this.messages.push(data)
      // console.log(this.messages,data)
    })
  }
  connect(){
    let username = prompt('enter your name')
    this.socket.emit('new-user-joined',username)
  }
  disconnect(){
    this.socket.emit('user-left')
  }
}