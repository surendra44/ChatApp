import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'chatApp';
  messages:any=[]
  msgdata:any=[]
  newusername = prompt('enter user name')

  constructor(public socketService:SocketioService) { 
  }
  ngOnInit() {
    this.socketService.newUser(this.newusername)
    console.log(this.newusername)
  }
  ngAfterViewInit(): void {
    
    // this.socketService.socket.on('receive', (data) => {
    //   console.log(data,'received on frontend')
    //   this.msgdata = data
    // })
  }
  listenmsg(){
    this.msgdata = new Observable((observer) => {
      this.socketService.socket.on('receive', (data) => {
        observer.next(data);
        // this.messages.push(data)
      });
    });
    console.log(this.msgdata)
}
}