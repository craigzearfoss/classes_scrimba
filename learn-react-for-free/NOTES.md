# Learn React for free

- Scrimba
- Bob Ziroll

---

#### What you'll learn

- Components - core building blocks for making reusable HTML
- JSX - React's proprietary wrapper around JavaScript
- Styling components
- Props & state
- Event handling
- Lifecycle methods
- HTTP
- Forms

### Why use React?

- Virtual DOM makes it faster than vanilla JavaScipt
- Resuable (and clearer) web components
- Maintained by Facebook
- Hirable - React is really in demand

#### A lot ES6 (ECMAScript6 or ECMAScript2015) is used in React.

### JSX

- Enabled by the react library.
- You can't have two adjacent JSX elements.

- ReactDOM.render() has two parameter:
  1. What you want to render?
  2. Where do you want to render it?
- Sample index.js file

```
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
)
```

### Functional Components are created by writing a function

- Start with a capital letter and use camel case.
- Needs to return a single jsx element.
- example

```
function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)
```

### React Components

- Good idea to remove React components into separate files.
- Have one React component per file.
- _MyInfo.js_ file

```
import React from "react";

function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

export default MyInfo;
```

- In the index.js file we need to import the MyInfo.js file.
- The import statement assumes it is a .js file.

```
import MyInfo from "./MyInfo";
```

- Organizational structure is important. You can create a folder for your components.

### Components

- Components are are user defined elements, like <MyNavbar /> or <MyInfo />
- <App /> is the root React component where everything branches from it.
- General you like to have the <App /> component just a "table of contents" of components, like:

```
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
```

### className

- In JSX we use className instead of class to assign classes to elements.
  - <header className="navbar">This is the header</header>
- This is so JSX can take advantage of the className DOM property.
  - document.getElementById("something").className += " new-class-name"
- You can only apply \*_className_ to React elements.
  - If you try to apply it to components that you have created it will do something else.

### Your component tags will be replaced when the page is rendered with the content that they return.

### JSX

- To include JavaScript in JSX wrap it in curly braces.

```
return (
<h1>Hello {firstName + " " + lastName}!</h1>
);
```

or

```
return (
<h1>Hello {`${firstName} ${lastName}`}!</h1>
)
```

### React Inline Styles

- React expects style to be an object, not a string like in HTML.

```
<h1 style={{color: "#FF8C00"}}>Good morning!</h1>
```

- Note that there are double curly braces. That's because you need to wrap the JSON object in curly brace because it is JavaScript.
- Anytime that there is a dash in a style property name, like "background-color" we replace the dash with camel case.

```
<h1 style={{backgroundColor: "#FF2D00"}}>Good morning!</h1>
```

- If the styles become long sometimes it is clearer to put them inside a variable.

```
const styles = {
  color: "#FF8C00",
  backgroundColor: "#FF2D00",
}

return (
  <h1 style={styles}>Good {timeOfDay}!</h1>
)
```

- When you deal with a style property that has a default unit, like "px", you only have to use the number.
  - So "font-size: 20px" becomes "fontSize: 20".
  - If you want to add the unit you will have to turn it into a string like 'fontSize: "20px"'.
- Things like ":hover" become impossible to do with inline css so define them in a standard style sheet.
- There are also styling libraries available.

### Properties modify the way a component acts.

Example of using properties in a component

```
import React from "react"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard
```

### If any props inside a component do not exist they will default to null when rendered.

### Higher order JavaScript functions

- Methods that you can run on an array that take a function as a parameter and allow you to decide what should happen to the elements of the array.
- They include:
  - [**map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - Example:

```
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubled nums.map(function(num) {
    return num * 2;
})
```

- [**filter**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [**sort**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [**reduce**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [**every**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [**some**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [**find**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [**findindex**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)

### Mapping components in React

- Example _App.js_

```
import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App
```

- Note that you need a key property in the components that is unique.

---

### React Todo App: Phase 3

_App.js_

```
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App
```

_TodoItem.js_

```
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
```

---

## Class-based Components

- **Function-based component**

```
import React from "react"

function App() {
    return (
        <div>
            <h1>{props.whatever}</h1>
        </div>
    )
}
```

- **Class-based component**

```
import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App
```

- If you have any code that determines the display logic put the inside of the **render** method before you do the return.
- You can also add other methods outside of the **render** method/
- Any that you use **props** inside of the class you need to refer to it as **this.props**.
  - Remember that in function-based components you could just refer to them as **props**

## State

- The data that a component maintains.
- Note that props can't be change by the components receiving them. They are **immutable**.
- States are a way that components can maintain and change their own data.
- To use states the component must be a class-based component.
- The method **setState** allows us to change state.
- You can pass state from a component down to a child component.
  - We do this through props.
- If we use **setState** to change a property it will automatically get updated in every child component.

### constructor

- A method that initializes parts of a class.
- The first thing that a constructor must do is make a call to a global function called **super**.
  - The **super** method brings down "goodies" from the parent (aka super) class.

```
import React from "react"

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        answer: "Yes"
      }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}

export default App
```

## Handling Events in React

- **Supported Events** - [https://reactjs.org/docs/events.html#supported-events](https://reactjs.org/docs/events.html#supported-events)

- All of the events are the JavaScript convention so they use camel case.

```
<button onClick="myFunction()">Click Me</button>
```

- But instead of passing the function as a string we use a set of curly braces.

```
<button onClick={function() {console.log("I was clicked!")}}>Click Me</button>
```

- **or** using ES6 arrow functions

```
<button onClick={() => console.log("I was clicked!")}>Click Me</button>
```

- **or** defiing the function elsewhere

```
import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function App() {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
```

### One convention is when you're handling a click event to have the method named "handleClick".

- You will have to reference the method with **this.handleClick**.
- Don't modify the state directly. Use the **setState** method.
- Whenever you create a class method that you want to use **setState** on you must bind this method to your own class inside of the constructor.
  - this.handleClick = this.handleClick.bind(this);
  - This makes sure that the handleClick method is bound to the context of _this_ as it is bound to this class.
- There are two ways you can use setState.

1. Pass the new state to setState.

```
this.setState({ count: 1 });
// This works okay when you don't care what the previous state was.
```

2. Pass a function to setState.

```
this.setState(prevState => {
    return {
        count: prevState.count + 1
    }
})
```

- You can pass a state down to child components as a prop and it will change everytime the state changes.

```
<ChildComponent count={this.state.count}/>
```

### _App.js_ from "React Todo App: Phase 6.1"

```
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App
```

---

# Lifecycle Methods

### render()

- The render method can get called many times. For instance, when anything gets changed.

```
render() {
  return (
    <div>
      Code goes here
    </div>
  );
}
```

### componentDidMount()

- The component has just been created.
- Only runs once when the component is showing up on the screen.
- Most common use is when you need an api call to get data from an external source.

### shouldComponentUpdate()

- If React ever has a question about whether a component should be re-rendered, it will re-render it just in case.
  - This can become slow in a large app.

```
shouldComponentUpdate(nextProps, nextState) {
  // Return true if you want it to update.
  // Return false if not (Will make the application more performant.)
}
```

### componentWillUnmount()

- Teardown or cleanup your code before your compenent disappears.
- Use it to remove anything that could potentially lead to clutter in the DOM or your application.
- For instance, you could remove an even listener that you set up in componentDidMount()

### getDerivedStateFromProps()

- Static method that is used when the component receives props from its parent and needs to set its own state base on those props.
- Returns the new, updated state based upon the props.
- A lot of times this has been misused and caused weird bugs and performance issues.
  - There's actually a better way to do what they are trying to do.
  - [https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
- Its use is discouraged.
- [https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

```
static getDerivedStateFromProps(props, state) {
  // return the new, updated state based upon the props
}
```

### getSnapshotBeforeUpdate()

- Allows you to create a backup of the way things are.
- The "snapshot" will most likely be an object with mutliple point of tdata inside of it.
- Not a really common lifecycle method.

```
getSnapshotBeforeUpdate() {
}
```

### componentDidUpdate()

- The first time the **render** is called **componentDidMount** is called. On any subsequent renders **componentDidUpdate** will be called.

```
componentDidUpdate() {
  console.log("Did Update")
}
```

---

# Deprecated Lifecycle Methods

### componentWillMount()

### componentWillUpdate()

### componentWillReceiveProps()

- **Legacy and you should avoid using** (Deprecated in React 16.3. Completely removed in React 17)
- Runs when a component is receving props this method is run.
- Runs when the component is mounted and everytime a parent component passes props to the component.

```
componentWillReceiveProps(nextProps) {
  if (nextProps.whatever !== this.props.whatever) {
    // do something important here
  }
}
```

---

# Conditional Rendering

- Try to keep the conditional in _App.js_ so the component just renders its stuff without worrying about conditions.

### Using the Ternary Operator

```
return (
  <div>
    {this.state.isLoading ?
    <h1>Loading...</h1> :
    <Conditional/>}
  </div>
)
```

### Using Boolean **&&** Operator

- In the example below the <h2> tag will only be rendered if this.state.unreadMessages.length > 0, otherwise nothing will be rendered.

```
{
    this.state.unreadMessages.length > 0 &&
    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
}
```

### fetch

- A promise-based way to perform http requests.
- [https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
- We'll use the Star Wars API (SWAPI) for data. ([https://swapi.dev/](https://swapi.dev/))
- Example:

```
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
```

# Forms in React

- **Formik** is a library that takes the pain out of writing React forms.
- With React we don't wait until the form is submitted to validate it. We keep the form in state.
  - On every keystroke we update the form state.
- [https://reactjs.org/docs/forms.html](https://reactjs.org/docs/forms.html)
- Make sure you got the input fields a "name" property and they exactly match the properties in state.
- Example for **input text**:

```
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                <br />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App
```

## Control form

- We want what is in our forms to perfectly match our state. In other words, we want the state to be our single source of truth.
- In the example above the state is "reactive".
- To do this at the state variable in the form input's value property.
- Example for **input text**:

```
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App
```

- **TIP**: You can save yourself potential problems by pulling the name and value from the event before the set state method like shown above.
  - If you're interested in why this is important you can look up React's synthetic event.

### **textarea** element

- React makes it self-closing element like an \<input> element.
  - So you can use the **value** property just like an \<input type="text"> element.

```
<textarea
  value={"Some default value}"
  onChange={this.handleChange}
/>
```

### **checkbox** element

- Note you need to add an **onChange** handler or the checkbox won't know what to do when it's clicked.
- In the **handleChange** method we need to check if the element being changed is a checkbox.

```
handleChange(event) {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}
...
      <label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={this.handleChange}
        /> Is friendly?
      </label>
```

### **radio** element

```
<label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={this.state.gender === "male"}
    onChange={this.handleChange}
  /> Male
</label>

<label>
  <input
    type="radio"
    name="gender"
    value="female"
    checked={this.state.gender === "female"}
    onChange={this.handleChange}
  /> Female
</label>
```

### **select** element

```
<select
  value={this.state.favColor}
  onChange={this.handleChange}
  name="favColor"
>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>
</select>
```

### Note that we can use one **handleChange** method for all elements.

- It is only two lines.
- All elements are handled the same except for checkboxes.

```
handleChange(event) {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}
```

### Submitting a form

- Note that in HTML5 buttons inside of forms act like \<input type="submit" /> elements when they are clicked and will submit the form.
- You can add an **onClick** method on the button, or an **onSubmit** method on the form like below.

```
<form onSubmit={this.handleSubmit}>
```

### React Form Practice

```
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />

                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>

                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>

            </main>
        )
    }
}

export default App
```

- Note that if we use the ES6 spread operator the dietary restrictions could be written as below:

```
handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
        this.setState(prevState => {
            return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }
        })
    :
    this.setState({
        [name]: value
    })
}
...
<label>
  <input
    type="checkbox"
    name="isVegan"
    onChange={this.handleChange}
    checked={this.state.dietaryRestrictions.isVegan}
  /> Vegan?
</label>
<br />

<label>
  <input
    type="checkbox"
    name="isKosher"
    onChange={this.handleChange}
    checked={this.state.dietaryRestrictions.isKosher}
  /> Kosher?
</label>
<br />

<label>
  <input
    type="checkbox"
    name="isLactoseFree"
    onChange={this.handleChange}
    checked={this.state.dietaryRestrictions.isLactoseFree}
  /> Lactose Free?
</label>
<br />
```
