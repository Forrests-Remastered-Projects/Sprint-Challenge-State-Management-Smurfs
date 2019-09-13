1. What problem does the context API help solve?

Its pretty much a component structure that lets us send data to all levels of our app. It solves the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are pretty much just object with type: and payload: , reducers are essentially state changers, and the store manages state values, its the single source of truth because everything is linked to it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a data repository available to all classes and the data does not change while Component states data can change over time.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system has been using hooks, they're the easiest to me.
