import { TestBed } from '@angular/core/testing';

import { HttpClientModuleService } from './http-client-module.service';

describe('HttpClientModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientModuleService = TestBed.get(HttpClientModuleService);
    expect(service).toBeTruthy();
  });
});
