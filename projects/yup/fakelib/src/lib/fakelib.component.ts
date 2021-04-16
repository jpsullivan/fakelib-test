import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-fakelib',
  template: `
    <p>
      fakelib works!
    </p>
  `,
  styles: [
  ]
})
export class FakelibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
