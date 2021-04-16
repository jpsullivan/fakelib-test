import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { FakelibService } from './fakelib.service';

describe('FakelibService', () => {
  let spectator: SpectatorService<FakelibService>;
  const createService = createServiceFactory(FakelibService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
