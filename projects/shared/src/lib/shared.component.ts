import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <p>
      shared works!我是来给你共用组件的！
    </p>
  `,
  styles: [
  ]
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
