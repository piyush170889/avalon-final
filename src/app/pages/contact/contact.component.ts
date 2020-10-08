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
  contactForm: FormGroup;
/* 
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
  }) */
  constructor(private fb: FormBuilder, private dataservice: DataService, private route: ActivatedRoute) {
    this.contactForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)/* Validators.pattern("[0-9 ]{12}") */]],
      profession_name: ['',[Validators.required]],
      company_name: ['',Validators.required],
      designation:['',Validators.required],
      address:['',Validators.required],
        country: ['',Validators.required],
        city: ['',Validators.required],
        comment: ['',Validators.required]
    })
    
  }

  ngOnInit(): void {


  }
  private contactPostModel(contactObject) {
    const contact = {
      "feature_name":"contactus",
      //"fname": `${contactObject['firstName']} ${contactObject['lastName']} `,
      "fname":contactObject['firstName'],
      "lname":contactObject['lastName'],
      "email": contactObject['email'],
      "mobile": contactObject['phone'],
      //"query": contactObject['address']['comment'],
      "city":contactObject['city'],
      "country":contactObject['country'],
      "profession": contactObject['profession_name'],
      "company": contactObject['company_name'],
      "designation": contactObject['designation'],
      "address": contactObject['address'],
      "cityname": contactObject['city'],
      "countryname":contactObject['country'],
      "comment":contactObject['comment']
    }
    return contact;
  } 
  public onSubmit(contactForm): any {
    let contactData = this.contactPostModel(contactForm.value);
    console.log(contactData);
    this.dataservice.post(ServerUrl.API_ENDPOINT_BLOB_CONTACT , contactData, true).subscribe((res) => {
      console.log(res)
    }, (err)=>console.error(err));
    
    this.contactForm.reset();

  }
   public clearFormdata() {
     this.contactForm.reset();
     alert("function called to clear data");
   }


}
