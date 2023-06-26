import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix-clone';
  navBg: any;
  @HostListener('document:scroll') scrollOver(){
    if(document.documentElement.scrollTop > 0)
      this.navBg={"background-color": "#000000"}
    else
      this.navBg={}
  }
}
