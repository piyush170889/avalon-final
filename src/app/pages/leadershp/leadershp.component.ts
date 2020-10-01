import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-leadershp',
  templateUrl: './leadershp.component.html',
  styleUrls: ['./leadershp.component.css']
})
export class LeadershpComponent implements OnInit {
  getid: any;
  currentId: number;

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.events.subscribe(val => console.log(val));

      this. getid =this.route.paramMap.subscribe(param => {this.currentId= Number(param.get('id'))});
      console.log(this.currentId)
      console.log(typeof(this.currentId))
     /*  this.route.paramMap.subscribe(params => { console})
      this.currentId =this.route.snapshot.params['id']; */

    }

  ngOnInit(): any {}

}
