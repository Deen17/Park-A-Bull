import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this._failure.unsubscribe();
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
    } );
  }
  onSubmit() {
    console.log(this.form.status);
    if (this.form.status === 'VALID') {
    console.log(this.form.value);
    } else {
      this.displayErrorMessage('Invalid Username/Password Combination. Please Fill in all entries.');
    }
  }
  public displayErrorMessage(msg: string) {
    this._failure.next(msg);
  }

}
