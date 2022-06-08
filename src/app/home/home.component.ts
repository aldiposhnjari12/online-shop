import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      id: 1,
      title: 'item number one',
      imageUrl: 'assets/images/hestia-logos.jpeg',
      rating: '4.5',
      desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      title: 'item number one',
      imageUrl: 'assets/images/hestia-logos.jpeg',
      rating: '4.5',
      desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      title: 'item number one',
      imageUrl: 'assets/images/hestia-logos.jpeg',
      rating: '4.5',
      desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 4,
      title: 'item number one',
      imageUrl: 'assets/images/hestia-logos.jpeg',
      rating: '4.5',
      desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]

}
