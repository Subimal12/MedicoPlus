import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-necessaryitem',
  templateUrl: './necessaryitem.component.html',
  styleUrls: ['./necessaryitem.component.css']
})
export class NecessaryitemComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {

    alert("Go to necessaryitem");
  }

}
