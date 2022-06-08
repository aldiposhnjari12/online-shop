import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {
      name: 'Laptop, PC, Telefona',
      icon: 'fa-solid fa-laptop',
      subCategories: [
        {
          subName: 'Laptop',
          icon: 'fa-solid fa-laptop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        },
        {
          subName: 'PC',
          icon: 'fa-solid fa-desktop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
          ]
        },
        {
          subName: 'Phones',
          icon: 'fa-solid fa-mobile-screen',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        }
      ]
    },
    {
      name: 'TV, Radio, Fotografi',
      icon: 'fa-solid fa-camera',
      subCategories: [
        {
          subName: 'TV',
          icon: 'fa-solid fa-tv',
          subs: [
            {
              subName: "SAMSUNG"
            },
            {
              subName: "LG"
            },
          ]
        },
        {
          subName: 'Radio',
          icon: 'fa-solid fa-radio',
          subs: [
            {
              subName: "SAMSUNG"
            },
            {
              subName: "APPLE"
            },
            {
              subName: "DELL"
            },
            {
              subName: "HAWEI"
            },
          ]
        },
        {
          subName: 'Aparate fotografik',
          icon: 'fa-solid fa-camera',
          subs: [
            {
              subName: "CANON"
            },
            {
              subName: "SAMSUNG"
            },
            {
              subName: "LG"
            },
            {
              subName: "APPLE"
            },
            {
              subName: "4K"
            }
          ]
        }
      ]
    },
    {
      name: 'Elektro shtepiake',
      icon: 'fa-solid fa-spa',
      subCategories: [
        {
          subName: 'Laptop',
          icon: 'fa-solid fa-laptop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        },
        {
          subName: 'PC',
          icon: 'fa-solid fa-desktop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
          ]
        },
        {
          subName: 'Phones',
          icon: 'fa-solid fa-mobile-screen',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        }
      ]
    },
    {
      name: 'Dekorime',
      icon: 'fa-solid fa-snowman',
      subCategories: [
        {
          subName: 'TV',
          icon: 'fa-solid fa-laptop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        },
        {
          subName: 'Radio',
          icon: 'fa-solid fa-desktop',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
          ]
        },
        {
          subName: 'Photo',
          icon: 'fa-solid fa-mobile-screen',
          subs: [
            {
              subName: "Lenovo"
            },
            {
              subName: "MAC"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            },
            {
              subName: "DELL"
            },
            {
              subName: "Alienware"
            }
          ]
        }
      ]
    }
  ]

}
