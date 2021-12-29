import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {

  marsPhotos = [
    {id:"1",img_src:"https://www.astro-rennes.com/planetes/images/mars/detail_mars.jpg"},
    {id:"2", img_src:"https://www.cieletespace.fr/media/default/0001/19/SURFACE_MARS_900-5f1a.jpeg"},
    {id:"3", img_src:"https://dailygeekshow.com/wp-content/uploads/2020/05/une-mars-riviere.jpeg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
