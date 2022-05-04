import { Component, OnInit } from '@angular/core';
import {coppologs} from "../coppologs";

@Component({
  selector: 'app-coppolog-list',
  templateUrl: './coppolog-list.component.html',
  styleUrls: ['./coppolog-list.component.css']
})
export class CoppologListComponent implements OnInit {

  coppologs = coppologs;

  constructor() { }

  ngOnInit(): void {
  }

}
