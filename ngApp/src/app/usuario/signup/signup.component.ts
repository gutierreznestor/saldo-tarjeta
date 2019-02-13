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
        Email: ['', [
          Validators.required,
          Validators.email]],
        Password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      });
    }

    Email() {
      return this.form.get('Email');
    }

    Password() {
      return this.form.get('Password');
    }

    async onSubmit() {
      let resultado = await this.auth.registrar(this.form.value);
    }
  }
