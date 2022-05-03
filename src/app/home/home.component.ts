import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgPath: string = 'assets/images/';
  thumbnails : any = {
    gettingStarted : this.imgPath + 'getting-started_250x250.jpg',
    whatShouldIDo : this.imgPath + 'what-should-i-do_250x250.jpg',
    helpMe : this.imgPath + 'help-me_250x250.jpg',
    videoTutorials : this.imgPath + 'video-tutorials_250x250.jpg',
    listingOfVulnerabilities : this.imgPath + 'listing-of-vulnerabilities_250x250.jpg',
    helpfulHintsAndScripts : this.imgPath + 'helpful-hints-and-scripts_250x250.jpg',
    donate : this.imgPath + 'donate_250x250.jpg',
    mutilliadeLdifFile : this.imgPath + 'mutilliade-ldif-file_250x250.jpg',
  };

  constructor() {



  }

  ngOnInit(): void {
  }

}
