import { Observable, of } from 'rxjs';
import { switchMap, merge } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario.model';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario$: Observable<Usuario>;
  usuarios$: CollectionReference;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
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
    return await this.usuarios$.where('email', '==', email)
    .get()
    .then( res => {
      if(res.empty) {
        return false;
      } else {
        return true;
      }
    })
    .catch( (error) => {
      console.error('Error al verificar si existe email. '+error);
    })
  }

}
