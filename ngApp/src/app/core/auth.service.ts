import { Observable, of } from 'rxjs';
import { switchMap, merge } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario.model';
import { HttpClient } from '@angular/common/http';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ROOT_URL = 'http://localhost:3000';

  usuario$: Observable<Usuario>;
  usuarios$: CollectionReference;
  usuarios: Observable<Usuario[]>;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.usuario$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<Usuario>(`usuarios/${ user.uid }`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.usuarios$ = this.afs.firestore.collection("usuarios");
   }

   async loginFacebook() {
     const provider = new auth.FacebookAuthProvider();
     const credentials = await this.afAuth.auth.signInWithPopup(provider);
    //  this.actualizarDatosUsuario(credentials.user);
     this.router.navigate(["/tarjetas"]);
   }

  private actualizarDatosUsuario(usuario) {

    const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc<Usuario>(`usuarios/${usuario.uid}`);
    const datos = {
      uid: usuario.uid,
      Email: usuario.email,
      Usuario: usuario.displayName,
      PhotoUrl: usuario.photoURL
    }

    return userRef.set(datos, { merge: true });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  async registrar(usuario: Usuario) {
    // let existeEmail = await this.existeEmail(usuario.Email);
    console.log(usuario);
  }

  async existeEmail(email) {

  }

  async getUsuarios() {
    this.usuarios = this.http.get<Usuario[]>(this.ROOT_URL+'/usuarios').pipe( usuarios => {
      return usuarios;
    });
  }

}
