import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpenState = !this.menuOpenState;
  }

  navs = [
    {
      name: 'Shtepia jone'
    },
    {
      name: 'Shitje / Oferta'
    },
    {
      name: 'Anetaresimi me oferte'
    },
    {
      name: 'Blog'
    },
    {
      name: 'Bisede me pediatrin'
    },
    {
      name: 'Rreth nesh'
    },
    {
      name: 'Kontakt'
    }
  ]

}
