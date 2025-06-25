import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../_services/account';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  private accountService = inject(Account);
  loggedIn = false;
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log(error)
    });
  }

  logout(){
    this.loggedIn = false;
  }
}
