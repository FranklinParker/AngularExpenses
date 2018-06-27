import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthService} from "../../../auth/service/auth.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output('closeSideNav') closeSideNav = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSidenavClose(){
    this.closeSideNav.emit();
  }

  onLogout(){
    this.authService.logout();
    this.onSidenavClose();
  }

}
