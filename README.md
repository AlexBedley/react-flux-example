# react-flux-example

This application displays US TV shows airing today and allows you to filter the shows by name.

More technically, this example shows how a flux-react application can:

1. Call and manipulate data from an API
2. Use components from elsewhere (like npm)

### To Run

```bash
cd FilterBar
npm i
mkdir dist
npm start

# in another tab
cd ListApp
npm i
mkdir dist
npm start
```

After both applications have been reactified and browserified (via `npm start`), open `ListApp/index.html`.

### What is Flux?

![](https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

Flux is a methodology that all data must flow in one direction (see pic above). Flux can be broken down into four things:

1. **Actions** - Actions are things that happen during the lifetime of your application. A user clicking a button or data being loaded from an API are examples of actions.
2. **Dispatcher** - Think of the Dispatcher as a router. Actions are sent to the Dispatcher which calls the appropriate callbacks.
3. **Store** - The Store registers callbacks with the Dispatcher. When Actions happen, the Dispatcher calls a callback the Store register, and the data the Store contains is altered in some way.
4. **View** - In our case, these are React components. Views can fire events (like a user pressing a button).

Helpful references (optional, for background information):
 * https://facebook.github.io/flux/
 * https://facebook.github.io/flux/docs/overview.html#content
 * https://facebook.github.io/flux/docs/todo-list.html#content
 
### This repo

This repo contains two applications: `FilterBar` and `ListApp`. `FilterBar` is fairly simple and only contains a single React component. Let's ignore `FilterBar` for now and take a look at `ListApp`. It will help to refer to the picture above.
 
 ```
 |-- ListApp
    |-- index.html
    |-- package.json
    |-- src
        |-- app.js                  - Main entry point for the application
        |-- actions
        |   |-- AppActions.js       - This is our action creator
        |-- components
        |   |-- App.react.js        - This is our controller-view which receives updates from the AppStore
                                      and passes it down to its children
        |   |-- List.react.js       - Renders a collection of ListItems
        |   |-- ListItem.react.js   - Renders a list object
        |-- dispatcher
        |   |-- AppDispatcher.js    - Flux built-in AppDispatcher
        |-- stores
            |-- AppStore.js         - Holds and fetches data for the application. Updates data based on
                                      Actions and emits change events
 ```

As you can see, the application is split into 4 main folders, *actions*, *dispatcher*, *stores*, *components*. These map to the concepts we learned in the previous section.

### Relation to class-insights

To turn this repo into class-insights we would split up the files to the following class-insight repos:

Table:
* List, ListItem

ButtonBar:
* FilterBar

Parent:
* AppActions, AppStore, AppDispatcher, App, app

### Limitations of this example

I had a hard time getting browserify to play nice with the child component, so I had to do wonky stuff like passing React down to the child component. This is because I didn't put the component in npm. Kevin and Miles already got this working in the skeleton repos so I'm not worried about this.
