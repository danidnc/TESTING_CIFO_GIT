import { TestBed } from '@angular/core/testing';

import { ListInfoServiceService } from './list-info-service.service';

describe('ListInfoServiceService', () => {
  let service: ListInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
