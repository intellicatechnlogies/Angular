import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  collapse: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.router.events.subscribe((val) => {
      const ele = document.getElementById('outlet');
      if(ele) ele.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    })
  }

  /**
   * Toggle menu
   * @param event 
   */
  toggleMenu(event: boolean){
    this.collapse = event;
  }
}
