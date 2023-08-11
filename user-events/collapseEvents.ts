// Event:
//   id: the id of the event
//   type: the event's type: LOGIN | USE_PRODUCT_A | USE_PRODUCT_B

// Events:
// A,  LOGIN
// B,  USE_PRODUCT_A
// C,  LOGIN
// D,  LOGIN

// Collapsed Event View:
// LOGIN: 3
// USE_PRODUCT_A: 1
// USE_PRODUCT_B: 0

// Problem: Define a method, which takes in a list of Events and outputs a Collapsed Event View.

export enum EventType {
  LOGIN = 'LOGIN',
  USE_PRODUCT_A = 'USE_PRODUCT_A',
  USE_PRODUCT_B = 'USE_PRODUCT_B',
}

type CollapsedEventView = Record<EventType, number>;

type UserEvent = {
  id: string;
  type: EventType;
};

const initialCollapsedEventView: CollapsedEventView = {
  [EventType.LOGIN]: 0,
  [EventType.USE_PRODUCT_A]: 0,
  [EventType.USE_PRODUCT_B]: 0,
};

export function collapseEvents(events: UserEvent[]): CollapsedEventView {
  return events.reduce((collapsedEventView, currentEvent) => {
    const { type } = currentEvent;

    // Increment count of events of the current type
    return {
      ...collapsedEventView,
      [type]: collapsedEventView[type] + 1,
    };
  }, initialCollapsedEventView);
}

// Event:
//   id: the id of the event
//   type: the event's type: LOGIN | USE_PRODUCT_A | USE_PRODUCT_B
//   browser_id: id of the browser from which the event originates from (hashed)
//   ip_addr: the IP address from which the event originates from (hashed)

// The browser_id is assigned per User Session:
//     * If 2 events have the same browser_id, it guarantees they came from the same user.
//     * 2 events with different browser_ids might have come from the same user if they began a session from a new browser

// The case is similar for the ip_addr. A user might start using a VPN which changes the ip_addr mid-session:
//     * If 2 events have the same ip_addr, it guarantees they came from the same user.
//     * 2 events with different ip_addrs might have come from the same user if they have started using a VPN mid-session

// id, browser_id, ip_addr, type
// A,         "1",     "a", LOGIN
// B,         "1",     "b", USE_FEATURE_A
// C,         "2",     "b", LOGIN
// D,         "3",     "c", LOGIN

// The above events can be traced to 2 users as follows:
// Events A, B and C are from the same user
// Event D is from another user

// Problem statement: Implement a function which takes a list of events and a hashed
// User Identifier and outputs a Collapsed Event View for the given user.

// Example:
// Events:
// id, browser_id, ip_addr, type
// A,         "1",     "a", LOGIN
// B,         "1",     "b", USE_PRODUCT_A
// C,         "2",     "b", LOGIN
// D,         "3",     "c", LOGIN

// Hashed user identifier: "1"

// Collapsed Event View:
// LOGIN: 2
// USE_PRODUCT_A: 1
// USE_PRODUCT_B: 0

type EventWithUserId = UserEvent & {
  browser_id: string;
  ip_addr: string;
};

export function collapseEventsByUserId(
  events: EventWithUserId[],
  userId: string
): CollapsedEventView {
  const previousUserIds = new Set<string>();

  return events.reduce((collapsedEventView, currentEvent) => {
    const { type, browser_id, ip_addr } = currentEvent;

    const isCurrentUserId = browser_id === userId || ip_addr === userId;
    const isPreviousUserId =
      previousUserIds.has(browser_id) || previousUserIds.has(ip_addr);

    if (isCurrentUserId || isPreviousUserId) {
      // Add current IDs to Set of matched IDs if they're not already there
      // (duplicates are ignored in a Set)
      previousUserIds.add(browser_id);
      previousUserIds.add(ip_addr);

      // Increment count of events of the current type
      return {
        ...collapsedEventView,
        [type]: collapsedEventView[type] + 1,
      };
    }

    // Did not match the user ID, so do not increment
    return collapsedEventView;
  }, initialCollapsedEventView);
}
