import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'chatApp';
  messages =[]
  newusername = prompt('enter user name')
  constructor(public socketService:SocketioService) {
    
  }
  ngOnInit(): void {
    // this.socketService.newUser(this.newusername)
    // console.log(this.newusername)
  }
  ngAfterViewInit(): void {
    this.socketService.newUser(this.newusername)
    console.log(this.newusername)
  }
  receivemsg(){
    this.socketService.listenmsg()
  }
  sendmsg(data:any){
    this.socketService.sendmsg(data.value)
  }

  

}
