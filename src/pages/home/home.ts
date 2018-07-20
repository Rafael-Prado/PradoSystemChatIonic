import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng2-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pradoname : string = '';

  constructor(public navCtrl: NavController, private socket: Socket) {

  }

  pradoChat(){
    this.socket.connect();
    this.socket.emit('set-pradoname', this.pradoname);
    this.navCtrl.push('ChatPradoSystemPage', {pradoname: this.pradoname});
  }

}
