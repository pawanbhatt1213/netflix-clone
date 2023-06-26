import { Component } from '@angular/core';
import { MovieApilService } from 'src/app/service/movie-apil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  bannerData: any;
  trendingData: any;

  constructor(private movieApi: MovieApilService){}

  ngOnInit(){
    this.movieApi.bannerApiData().subscribe((res)=>this.bannerData=res.results);
    this.movieApi.trendingMovieApiData().subscribe((res)=>this.trendingData=res.results);
  }


}
