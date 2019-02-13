import { AuthService } from './../../core/auth.service';
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
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) {
      this.usuario = {
        uid: '',
        Email: '',
        Password: ''
      }
    }

    ngOnInit() {
      this.form = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email]],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      });
    }

    email() {
      return this.form.get('email');
    }

    password() {
      return this.form.get('password');
    }

    async onSubmit() {
      let resultado = await this.auth.registrar(this.form.value);
    }
  }
