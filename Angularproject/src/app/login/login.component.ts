import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  error: string;


  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void{

    this.user= new User(0,"","","");
  }
  
  onsubmit(){
    
    //alert(this.user.name);
    console.log(this.user);
    this.data.onSubmit(this.user).subscribe(
      res => {
        console.log("response", res);
        if (res[0]) //changed here 
        {
          const msg = ("User Id:"+ res[0].id+ "and Phone Number is:"+ res[0].phno);
          alert(msg);
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
}
