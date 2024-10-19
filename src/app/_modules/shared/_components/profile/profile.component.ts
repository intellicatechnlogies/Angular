import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  userInfo: any;
  userName: any;
  userRole: any;
  loginInfo: any;
  selectedRole: any;

  constructor(
    private route: Router
  ) { }


  ngOnInit(): void {

    this.userName = this.userInfo.UserDetail[0].userName;
    this.userRole = this.loginInfo[0].roleName;
    this.selectedRole = this.userInfo.userRoleDetail[0].roleName;
  }

  navigateToSelectYourRole(roleName: string) {
    this.route.navigate(['/select-your-role'], { queryParams: { roleName: roleName } });
  }
  
  logout() {
  }
}
