import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  authState,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(private auth: Auth) {
    authState(auth)
      .pipe()
      .subscribe((user) => {
        console.log(user);
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
  }

  logintogoogle() {
    let ggProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth,ggProvider);
  }

  logOut() {
    return signOut(this.auth);
  }
}
