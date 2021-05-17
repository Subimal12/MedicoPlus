import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  error: string;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User(0, "", "", "");

  }

  /* setFile(event)
   {
     this.pic = event.target.files[0];
   }*/

  adduser() {
    //alert(this.user.name);
    let formdata = new FormData();
    formdata.append("name", this.user.name);
    formdata.append("adress", this.user.adress);
    formdata.append("phno", this.user.phno);
    console.log("Form data ", formdata, this.user);

    this.data.addUser(this.user).subscribe(
      res => {
        console.log("response", res);
        if (res.res == "Saved") //changed here 
        {
          alert("Data Uploaded");
          this.router.navigate(['user_list']);
        }
      },
      err => {
        this.error = err.message;
        if(err.message) {
          this.error = "Something went wrong, Please try again!";
        }
        console.log(err.message);
      }
    )

  }

  login() {

  }

}
