import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers:any[];

  constructor(
    private route: ActivatedRoute,
    private service : GithubFollowersService) { }

  
  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap( combined => {
      let id = combined[0].get('id');
      combined[1].get('page');

      return this.service.getAll();
      
    })
    .subscribe(followers => this.followers = followers);

    // this.route.paramMap
    //   .subscribe(params => {

    //   });
    // this.route.snapshot.paramMap.get('id');
    
    // this.route.queryParamMap
    //   .subscribe(params => {

    //   });
    // this.route.snapshot.queryParamMap.get('pageNumber');

 
  }

}
