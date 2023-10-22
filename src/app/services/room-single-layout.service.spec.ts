import { TestBed } from '@angular/core/testing';

import { RoomSingleLayoutService } from './room-single-layout.service';

describe('RoomSingleLayoutService', () => {
  let service: RoomSingleLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomSingleLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
