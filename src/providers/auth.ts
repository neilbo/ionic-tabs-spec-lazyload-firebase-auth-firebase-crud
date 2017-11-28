import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth

  ) {
    console.log('Hello Auth Provider');
  }

  signUp(user) {
    try {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      console.log('Auth: Signed Up');
    } catch (error) {
      console.error('Auth error signup', error);
    }
  }
  login(user) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      console.log('Auth: Logged In');
    } catch (error) {
      console.error('Auth error login', error);
    }
  }

  logout() {
    this.afAuth.auth.signOut()
    
  }

}
