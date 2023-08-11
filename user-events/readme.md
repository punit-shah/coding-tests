# User events

## Part one

### Event properties

- `id`: the id of the event
- `type`: the event's type. One of `LOGIN | USE_PRODUCT_A | USE_PRODUCT_B`

### Problem statement

Implement a function which takes a list of Events and outputs a Collapsed Event View with a count of each type of event.

### Example

Events:

| id  | type          |
| --- | ------------- |
| A   | LOGIN         |
| B   | USE_PRODUCT_A |
| C   | LOGIN         |
| D   | LOGIN         |

Given the above events, the Collapsed Event View should be:

```js
{
  LOGIN: 3,
  USE_PRODUCT_A: 1,
  USE_PRODUCT_B: 0,
}
```

## Part two

### Event properties

- `id`: the id of the event
- `type`: the event's type. One of `LOGIN | USE_PRODUCT_A | USE_PRODUCT_B`
- `browser_id`: id of the browser from which the event originates from (hashed)
- `ip_addr`: the IP address from which the event originates from (hashed)

The `browser_id` is assigned per user session.
If 2 events have the same `browser_id`, it guarantees they came from the same user.
2 events with different `browser_id`s might have come from the same user if they began a session from a new browser

The case is similar for the `ip_addr`. A user might start using a VPN which changes the `ip_addr` mid-session.
If 2 events have the same `ip_addr`, it guarantees they came from the same user.
2 events with different `ip_addr`s might have come from the same user if they have started using a VPN mid-session

### Problem statement

Implement a function which takes a list of Events and a hashed user identifier, and outputs a Collapsed Event View for the given user.

### Example

Events:

| id  | browser_id | ip_addr | type          |
| --- | ---------- | ------- | ------------- |
| A   | "1"        | "a"     | LOGIN         |
| B   | "1"        | "b"     | USE_FEATURE_A |
| C   | "2"        | "b"     | LOGIN         |
| D   | "3"        | "c"     | LOGIN         |

The above events can be traced to 2 users:

- Events A, B and C are from the same user
- Event D is from another user

Given the above events, and the hashed user identifier `"1"`, the Collapsed Event View should be:

```js
{
  LOGIN: 2,
  USE_PRODUCT_A: 1,
  USE_PRODUCT_B: 0
}
```
