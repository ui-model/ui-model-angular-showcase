import {inject, TestBed} from '@angular/core/testing';

import {UpdateMetadataGuard} from './update-metadata-guard.service';

describe('UpdateMetadataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateMetadataGuard]
    });
  });

  it('should ...', inject([UpdateMetadataGuard], (service: UpdateMetadataGuard) => {
    expect(service).toBeTruthy();
  }));
});
