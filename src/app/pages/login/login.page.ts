import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  isEmail: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  
  checkEmail() {
    if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(this.email)) {
      this.isEmail = false;
    } else {
      this.isEmail = true;
    }
  }
  profilImage: boolean = false;
  next() {
    if (this.isEmail && this.password.length >= 8) {
      this.profilImage = true;
    }
  }
  onSubmit() {
    const loginData = {
      mail: this.email,
      password: this.password,
    };
    this.checkEmail()
    if (this.isEmail && loginData.password.length >= 8) {
      this.appService.loginUser(loginData.mail, loginData.password).subscribe({
        next: (res : any) =>{
         if (res.length > 0) {
          this.appService.createTokenUser(res[0])
          const user = {
            id: res[0].id,
            creationTime: res[0].creationTime,
            displayName: res[0].displayName,
            email: res[0].email,
            emailVerified: res[0].emailVerified,
            telephone: res[0].telephone ?? 0,
            password: res[0].password,
            lastSignInTime: res[0].lastSignInTime,
            photoURL: res[0].photoURL,
            uid: res[0].uid,
            coins: res[0].coins,
            online: 1
          }
          this.appService.setStatutUser(user).subscribe((r) => {
            console.log(r)
          })
          this.appService.redirect(['folder/Inbox'], null)
         }
        //  this.loader = false;
        },
        error: (err) => {
          // this.error = true;
          // this.loader = false;
        }
      })
    } else {
      // this.messageError = "Veuillez vérifier votre email et votre mot de passe";
      // this.loader = false;
    }
  }
}
