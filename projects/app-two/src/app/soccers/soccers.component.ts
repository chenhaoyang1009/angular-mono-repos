import { Component, OnInit } from '@angular/core';
import { Soccer } from 'dist/shared/lib/interface/Soccer';
import { TestServiceService } from 'shared';

@Component({
  selector: 'app-soccers',
  templateUrl: './soccers.component.html',
  styleUrls: ['./soccers.component.css'],
})
export class SoccersComponent implements OnInit {
  soccers: Soccer[] = [];

  constructor(private testServiceService: TestServiceService) {}

  ngOnInit(): void {
    this.getSoccers();
  }

  // 获取球员（共用服务）
  getSoccers(): void {
    this.testServiceService.getSoccers().subscribe((val) => {
      this.soccers = val;
    });
  }

  selectSoccer?: Soccer;

  onSelect(soccer: Soccer) {
    this.selectSoccer = soccer;
  }
}
