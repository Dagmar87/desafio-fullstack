import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {

    this.submitted = true;

    if(this.submitted)
    {
      this.router.navigate(['login']);
    }

  }

}
