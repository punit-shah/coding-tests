import {
  EventType,
  collapseEvents,
  collapseEventsByUserId,
} from './userEvents';

describe('collapseEvents', () => {
  test('when called with a list of Events, it should output the expected Collapsed Events View', () => {
    const events = [
      { id: 'A', type: EventType.LOGIN },
      { id: 'B', type: EventType.USE_PRODUCT_A },
      { id: 'C', type: EventType.LOGIN },
      { id: 'D', type: EventType.LOGIN },
    ];

    expect(collapseEvents(events)).toEqual({
      [EventType.LOGIN]: 3,
      [EventType.USE_PRODUCT_A]: 1,
      [EventType.USE_PRODUCT_B]: 0,
    });
  });
});

describe('collapseEventsByUserId', () => {
  test('when called with a list of events and a hashed user ID, it should output the expected Collapsed Events View for the given user', () => {
    const events = [
      { id: 'A', browser_id: '1', ip_addr: 'a', type: EventType.LOGIN },
      { id: 'B', browser_id: '1', ip_addr: 'b', type: EventType.USE_PRODUCT_A },
      { id: 'C', browser_id: '2', ip_addr: 'b', type: EventType.LOGIN },
      { id: 'D', browser_id: '3', ip_addr: 'c', type: EventType.LOGIN },
    ];
    const userId = '1';

    expect(collapseEventsByUserId(events, userId)).toEqual({
      [EventType.LOGIN]: 2,
      [EventType.USE_PRODUCT_A]: 1,
      [EventType.USE_PRODUCT_B]: 0,
    });
  });
});
