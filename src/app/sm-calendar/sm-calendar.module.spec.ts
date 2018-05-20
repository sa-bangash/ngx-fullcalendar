import { SmCalendarModule } from './sm-calendar.module';

describe('SmCalendarModule', () => {
  let smCalendarModule: SmCalendarModule;

  beforeEach(() => {
    smCalendarModule = new SmCalendarModule();
  });

  it('should create an instance', () => {
    expect(smCalendarModule).toBeTruthy();
  });
});
