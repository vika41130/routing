import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}
