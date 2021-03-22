import { Component, OnInit } from '@angular/core';
import { CST } from '../../../../constants/ls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem(CST.LS_LABEL_USER);
    localStorage.removeItem(CST.LS_LABEL_TOKEN);
    this.router.navigate(['landing']);
  } 

}
