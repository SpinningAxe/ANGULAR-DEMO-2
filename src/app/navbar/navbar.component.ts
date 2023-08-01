import { Component,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../service/authentication.service';
import { DataService } from '../service/data-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onCart = new EventEmitter();

  constructor( public AuthService: AuthService, public DataService: DataService){}

  resetList(){
    this.DataService.resetItemList();
  }

  showCart() {
    this.onCart.emit();
  }

  logIn(){
    this.AuthService.logintogoogle();
  }

  logOut(){
    this.AuthService.logOut();
  }
}
