import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class MarsImagesService {
      constructor(){

      }

      marsImages = [
        {
            id:"1",
            img_src:"https://www.astro-rennes.com/planetes/images/mars/detail_mars.jpg"
        },
        {
            id:"2", 
            img_src:"https://www.cieletespace.fr/media/default/0001/19/SURFACE_MARS_900-5f1a.jpeg"
        },
        {
            id:"3", 
            img_src:"https://dailygeekshow.com/wp-content/uploads/2020/05/une-mars-riviere.jpeg"}
      ]

      getMarsImages(){
          console.log(this.marsImages)
          return this.marsImages
      }
  }