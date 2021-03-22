import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CST } from '../../../../constants/ls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string;

  constructor(public router: Router) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem(CST.LS_LABEL_USER));
    this.username = user.username;
    console.log(user); 
  }

  logout() {
    localStorage.removeItem(CST.LS_LABEL_USER);
    localStorage.removeItem(CST.LS_LABEL_TOKEN);
    this.router.navigate(['landing']);
  } 

}
