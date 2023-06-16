import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })

  export class MarsImagesService {

      constructor(private http:HttpClient){
    }

    apiKey = "P9cxIDnheanzMt6sgXrOJ94T1qz5OEsd1j9uts2o";
    apiURL = "https://api.nasa.gov/planetary/apod?api_key=P9cxIDnheanzMt6sgXrOJ94T1qz5OEsd1j9uts2o";
    apiMarsRoverURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-10-15&api_key="
    
    // getData(){
    //     let url = `${this.apiMarsRoverURL}${this.apiKey}`;
    //     console.log(this.http.get(url));
    //     return this.http.get(url);
    // }


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

      getMarsImagesFromAPI(){
        //   console.log(this.marsImages)
        //   return this.marsImages
        let url = `${this.apiMarsRoverURL}${this.apiKey}`;
        console.log(this.http.get(url));
        return this.http.get(url);
      }
  }