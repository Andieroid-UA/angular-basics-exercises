import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileName: string;
  profileAge: number = 29;

  constructor() {
    this.profileName = 'Andie';
  }

}
