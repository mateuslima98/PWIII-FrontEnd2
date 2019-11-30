import { TestBed } from '@angular/core/testing';

import { OcorrenciaAPIService } from './ocorrencia-api.service';

describe('OcorrenciaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcorrenciaAPIService = TestBed.get(OcorrenciaAPIService);
    expect(service).toBeTruthy();
  });
});
