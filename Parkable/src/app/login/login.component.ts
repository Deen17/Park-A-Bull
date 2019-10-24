import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginService, UserInfo, userType} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  form: FormGroup;
  // tslint:disable-next-line: variable-name
  private _failure = new Subject<string>();
  failureMessage = '';
  failedLogin = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this._failure.unsubscribe();
    localStorage.clear();
  }
  ngOnInit() {
    this._failure.subscribe((message) => {
      this.failureMessage = message;
      console.log(this.failureMessage);
    });
    this._failure.pipe(
      debounceTime(5000)
    ).subscribe(() => {
      this.failureMessage = null;
      console.log(this.failureMessage);
    });
  }
  onSubmit(event: any) {
    if (event.key === 'Enter' || event.type === 'click') {
      console.log(this.form.status);
      if (this.form.status === 'VALID') {
        console.log(this.form.value);
        this.loginService.login(this.form.value.username, this.form.value.password)
          .subscribe(info => {
            Object.entries(info).forEach(
              keyVal => {
                localStorage.setItem(keyVal[0], keyVal[1]);
              }
            );
          });
      } else {
        this.displayErrorMessage('Invalid Username/Password Combination. Please Fill in all entries.');
      }
    }
  }
  public displayErrorMessage(msg: string) {
    this._failure.next(msg);
  }

}
