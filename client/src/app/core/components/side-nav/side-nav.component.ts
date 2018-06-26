import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output('closeSideNav') closeSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSidenavClose(){
    this.closeSideNav.emit();
  }

}
