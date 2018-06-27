import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/index";
import {AuthService} from "../../../auth/service/auth.service";
import {LoggedInUser} from "../../../auth/model/loggedInUser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output('sidebarToggle') sidebarToggle = new EventEmitter<void>();
  loggedInUser: LoggedInUser;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUserLoggedInUserObservable()
      .subscribe((loggedInUser: LoggedInUser) => {
        this.loggedInUser = loggedInUser;
      });
  }

  ngOnDestroy() {
  }

  onToggle() {
    this.sidebarToggle.emit();
  }

  onLogout(){
    this.authService.logout();
  }
}
