import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from './../usuario.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuarioForm: FormGroup;
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
      this.usuarioForm = this.formBuilder.group({
        Email: [this.usuario.email, [Validators.required, Validators.email]],
        Usuario: [this.usuario.displayName, [Validators.required, Validators.minLength(6)]],
        Password: [this.usuario.password, [Validators.required, Validators.minLength(6)]],
      });
    }
  }
