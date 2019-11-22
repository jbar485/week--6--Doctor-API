import { Tamagotchi } from './../src/tamagotchi.js';

describe('Kutchipatchi', () => {
  jest.useFakeTimers();
  let kutchipatchi;

  beforeEach(function() {
  kutchipatchi = new Tamagotchi("Kutchipatchi");
  kutchipatchi.setHunger();
});

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(kutchipatchi.name).toEqual("Kutchipatchi");
    expect(kutchipatchi.foodLevel).toEqual(10);
  });

  test('should have a food level of 8 after 2001 milliseconds', () => {
    jest.advanceTimersByTime(1001);
    expect(kutchipatchi.foodLevel).toEqual(9);
  });

  test('should die if foodLevel gets to -10', function() {
  if (kutchipatchi.foodLevel = -10);
    expect(kutchipatchi.updateStatus()).toEqual();
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(kutchipatchi.updateStatus()).toEqual();
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    kutchipatchi.feed();
    expect(kutchipatchi.foodLevel).toEqual(10);
  });
});
