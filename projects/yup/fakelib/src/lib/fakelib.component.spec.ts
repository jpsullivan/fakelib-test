import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FakelibComponent } from './fakelib.component';

describe('FakelibComponent', () => {
  let spectator: Spectator<FakelibComponent>;
  const createComponent = createComponentFactory(FakelibComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
