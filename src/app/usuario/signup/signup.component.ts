import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './../usuario.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.usuario = {
        uid: '',
        email: '',
        displayName: '',
        password: ''
      }
    }

    ngOnInit() {
      this.form = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email]],
        displayName: ['', [
          Validators.required,
          Validators.minLength(6)]],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      });
    }

    email() {
      return this.form.get('email');
    }

    displayName() {
      return this.form.get('password');
    }

    password() {
      return this.form.get('password');
    }
  }
