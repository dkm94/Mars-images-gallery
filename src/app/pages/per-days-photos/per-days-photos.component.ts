import { Component, OnInit } from '@angular/core';
import { MarsImagesService } from 'src/app/core/services/marsImages.service';

@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {

  title="Photos par jour";
  marsPhotos = [] as any;

  constructor(private MarsImagesService: MarsImagesService) { }

  ngOnInit() {
    // this.marsPhotos = new Array<any>(
    //   {id:"1",img_src:"https://www.astro-rennes.com/planetes/images/mars/detail_mars.jpg"},
    //   {id:"2", img_src:"https://www.cieletespace.fr/media/default/0001/19/SURFACE_MARS_900-5f1a.jpeg"},
    //   {id:"3", img_src:"https://dailygeekshow.com/wp-content/uploads/2020/05/une-mars-riviere.jpeg"}
    // )
    // this.marsPhotos = this.MarsImagesService.getMarsImagesFromAPI()
    this.MarsImagesService.getMarsImagesFromAPI().subscribe(data => {
     console.log(data)
     this.marsPhotos = data;
    })
  }
}
