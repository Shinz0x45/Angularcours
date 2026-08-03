import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userURL = 'http://localhost:3000/users'

  private httpClient = inject(HttpClient)

  getAllUsers(){
    return this.httpClient.get(this.userURL);
  }

  addUser(userObj: any) {
    return this.httpClient.post(this.userURL, userObj);
  }
// Get avec JSON sever
  connexion(loginData:{ email: string, mdp: string }):Observable<any> 
  {
    return this.httpClient.get<any[]>(`${this.userURL}?email=${loginData.email}&mdp=${loginData.mdp}`);
  }

  // Post pour login avec vrai database & backend
  // connexion(loginData:{ email: string, mdp: string }):Observable<any> 
  // {
  //   return this.httpClient.post<any>(this.usersURL + '/login', loginData);
  // }

  // getUserById(id: number) {
  //   return this.httpClient.get(this.userURL + '/' + id);
  // }

  // supprimerUser(id:any) {
  //   return this.httpClient.delete(this.userURL + '/' + id);
  // }
  // updateUserById(userObj:any) {
  //   return this.httpClient.put(this.userURL + '/' +  userObj.id, userObj);
  // }
}
