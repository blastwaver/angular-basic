import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-githup-profile',
  templateUrl: './githup-profile.component.html',
  styleUrls: ['./githup-profile.component.css']
})
export class GithupProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("oninit");
    this.route.paramMap
      .subscribe(params => {
       let id = params.get('id');
       console.log(id);
      })
  }

  submit() {
    this.router.navigate(['/followers'], {queryParams: {page:1, order:'newest'}});
  }

}
