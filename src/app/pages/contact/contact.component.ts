import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../../core/services/dataservices/data.service';
import { ServerUrl } from '../../core/constants/serverUrl.constants';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //contactForm: FormGroup;

  contactform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    profession_name: new FormControl(''),
    company_name: new FormControl(''),
    designation: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      comment: new FormControl('')
    })
  })
  constructor(private fb: FormBuilder, private dataservice: DataService, private route: ActivatedRoute) {
    /* this.contactForm = this.fb.group({

    }) */
  }

  ngOnInit(): void {


  }
  private contactPostModel(contactObject) {
    const contact = {
      "feature_name":"contactus",
      "name": `${contactObject['firstName']} ${contactObject['lastName']} `,
      "email": contactObject['email'],
      "mobile": contactObject['phone'],
      "query": contactObject['address']['comment']
    }
    return contact;
  }
  public onSubmit(contactForm): any {
    let contactData = this.contactPostModel(contactForm.value);
    this.dataservice.post(ServerUrl.API_ENDPOINT_BLOG_CONTACT, contactData, true).subscribe((res) => {
      console.log(res)
    }, (err)=>console.error(err));
    
    this.contactform.reset();

  }


}
