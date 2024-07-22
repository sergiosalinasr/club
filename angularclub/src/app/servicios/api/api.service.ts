import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:4000/"
  private nodetokenEndpoint = 'http://localhost:3000/login';
  private sigUpNodeEndpoint = 'http://localhost:3000/SignUp';

  constructor(private http:HttpClient) { }



  // este servicio en vez de acceder directamente a Keycloak, lo hace a através de un servicio node que si accede a keycloak
  loginNode(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = JSON.stringify({
      username: username,
      password: password
    });

    return this.http.post(this.nodetokenEndpoint, body, { headers }).pipe(
      catchError(error => {
        console.log("Angular - error.status="+error.status)
        if (error.status === 0 || error.status === 504) {
          return throwError(error);
        }
        return throwError(error);
      })
    );
  }

  // este servicio en vez de acceder directamente a Keycloak, lo hace a através de un servicio node que si accede a keycloak
  signUpNode(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = JSON.stringify({
      username: username,
      password: password
    });

    return this.http.post(this.sigUpNodeEndpoint, body, { headers }).pipe(
      catchError(error => {
        console.log("Angular - error.status="+error.status)
        if (error.status === 0 || error.status === 504) {
          return throwError(error);
        }
        return throwError(error);
      })
    );
  }


}
