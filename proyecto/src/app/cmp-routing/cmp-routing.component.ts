import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-cmp-routing',
  templateUrl: './cmp-routing.component.html',
  styleUrls: ['./cmp-routing.component.css']
})
export class CmpRoutingComponent implements OnInit {
  num = 1
  loading: boolean = false;
  constructor(private loaderServ: LoaderService) { }

  ngOnInit() {
    this.loaderServ.eventLoading.subscribe((isLoading: boolean) => {
      this.loading = isLoading;
    });
  }

}
