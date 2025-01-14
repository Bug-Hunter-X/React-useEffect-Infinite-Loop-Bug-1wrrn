# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by a missing dependency.

## Bug Description
The `useEffect` hook is used to perform side effects after a component renders. However, if the dependency array is incorrect, the effect may run repeatedly, leading to an infinite loop. In this case, the `setInterval` function is called repeatedly, causing the counter to increment infinitely.

## Bug Solution
The solution involves adding the `count` variable to the dependency array. This ensures that the effect only runs when the `count` variable changes.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the rapidly incrementing counter in the browser.

## How to Fix
1. Open `bug.js`.
2. Add `count` to the dependency array in `useEffect`.
3. Run `npm start` again. The counter should now increment correctly.