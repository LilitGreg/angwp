import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  images = [];
  projects = [];
  featered_id = '';

  constructor(private http:HttpClient) {
   
  }

  ngOnInit(): void {
    this.http.get('http://localhost:88/Sgroup/wp-json/wp/v2/books')
      .subscribe(data => {
        for (let key in data) {
          if(data.hasOwnProperty(key)) {
            this.projects.push(data[key]);
          }
        }
        console.log(this.projects);
      })
     

      // this.http.get('http://localhost:88/Sgroup/wp-json/wp/v2/media/36')
      // .subscribe(media => {
      //   for (let key in media) {
      //     if( key == 'guid')
      //     console.log(key, media[key]);
          
      //     this.images.push(media[key]);
      //     // if(media.hasOwnProperty(key)) {
      //     //   this.images.push(media[key]);
      //     // }
      //   }

      //   // for (let key in circle) {
      //   //   if(typeof circle[key]!= 'function')
      //   //   console.log(key, circle[key]);
      //   // } 

      //  /// console.log(this.images);
      // })

      
  }

  

}
