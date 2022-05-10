import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CoppoLog} from "../interfaces/coppoLog";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CoppologApi {

  private API: string = "http://localhost:8070/CoppoLogs?count=10";

  constructor(private http: HttpClient) {
  }

  getCoppoLogs(): Observable<CoppoLog[]> {
    return this.http.get<CoppoLog[]>(this.API);
  }

}
