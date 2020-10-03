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
  selected:any;
  selectedMember: number = 1;
  showDivIf = false;
  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.events.subscribe(val => console.log(val));

 
   /*    console.log(this.currentId)
      console.log(typeof(this.currentId)) */
     /*  this.route.paramMap.subscribe(params => { console})
      this.currentId =this.route.snapshot.params['id']; */

    }
    getCurrentElementId(id) {
      this.selectedMember = id;
      this.router.navigate([`/leadershp/${id}`])
      console.log(id)
    }
    getImage(ev) {
      alert('called');
      console.log("fun called----", ev.target.currentId);
   }
  ngOnInit(): any {
    this.route.paramMap.subscribe(param => {
      if(param.get('id')) {
        this.selectedMember= Number(param.get('id'))
      }else {
        this.selectedMember = 1;
      }
    })
  
  }

}
