import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('search', {static: false}) searchField: ElementRef;

  focusSearch(): void {
    this.searchField.nativeElement.focus();
  }

  constructor() { }

  ngOnInit() {
  }

}
