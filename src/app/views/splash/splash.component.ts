import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit{

  constructor(private route: Router) {
  }

  ngOnInit() {
   setTimeout(() => {
     this.loginNavigate()
   }, 3000)
  }

  loginNavigate(){
    return this.route.navigate(['/login'])
  }

}
