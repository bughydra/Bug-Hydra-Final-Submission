import { TestBed } from '@angular/core/testing';

import { RoomsinglelayoutService } from './roomsinglelayout.service';

describe('RoomsinglelayoutService', () => {
  let service: RoomsinglelayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsinglelayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
