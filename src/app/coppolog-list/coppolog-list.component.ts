import { Component, OnInit } from '@angular/core';
import {CoppoLog} from "../interfaces/coppoLog";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-coppolog-list',
  templateUrl: './coppolog-list.component.html',
  styleUrls: ['./coppolog-list.component.css']
})


export class CoppologListComponent implements OnInit {

  coppoLogs : CoppoLog[];

  private url: string = "http://localhost:8070/CoppoLogs?count=10";

  constructor(private http: HttpClient) {
    this.coppoLogs = [];
  }


  ngOnInit() {
    this.getCoppoLogs().subscribe({
      next: success =>{
        this.coppoLogs = success;
        console.log(this.coppoLogs)
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getCoppoLogs() : Observable<CoppoLog[]>{
    return this.http.get<CoppoLog[]>(this.url);
  }

}
