# &lt;/salt&gt;

## Salt ToDo React

This is the new classic Todo app exercise. Your task is to create a simple todo app - no backend required.
Exactly how you implement and design this is up to you - but you need to follow the specifications as detailed below. You may use the screenshot at the bottom of this page as inspiration.

Nothing is set up for you, and we recommend that your first command is:

`npx create-react-app todoreact`

Take care reading the UI and Technical specifications below as they are in a different format to before, they follow the [RFC2119]
(<https://www.ietf.org/rfc/rfc2119.txt>) specification.

>There are many guides out there for building react todo apps, feel free to take inspiration from these but make sure to not copy-paste solutions as that would be considered cheating.

### UI specifications

- There MUST be a form input where the user can add a new todo.
- When the user submits a new todo from the form the todo card MUST appear in the list.
- Each todo card MUST be toggleable between 'done' and 'not done'.
- There MUST be a remove-button on cards that are 'done' and when the user clicks the button it will be removed from the list completely.
- Todo cards which are set to 'done' MUST appear on the bottom of the list, and they SHOULD be easy to visually separate.
- The original order of the cards MUST be maintained if you toggle a card to 'done' and then back again.
- It SHOULD be easy to add, toggle and remove todo's. For example adding a new todo by hitting the 'Enter'-button

### Technical specifications

- You MUST keep the todo-list in a state object.
- You MUST persist the state in LocalStorage.
- You MUST use functional components
- You MUST use at least 3 levels of components. In the simplest case this would be an App component in which you have a TodoList component containing TodoCard components.
- You MUST use `props` for passing the necessary information to the todo components.
- You MUST use Semantic html elements.
- You MUST use a clear naming strategy for your css and class names.
- You SHOULD use BEM.
- You SHOULD have a mobile first approach.
- You SHOULD have suitable tests - we will run your test, and expect no errors. Make the tests you write pass
- You MUST NOT use React Router nor Redux.

#### Tech specification for test correction

We will run a separate end-to-end-test suite (e2e test) that automate correcting your tests. In order for our automated correction to run properly you will need to use the classes and ids in the list below.

Here is what our e2e-tests will do:

- to add a new todo we will type in an input field with id `txtTodoItemToAdd` and then click an element with id `btnAddTodo`
- to see how many items the list have we will look for an element with id `todoList`
- to find out if a todo is complete we will look for a class `todo--completed`
- to find out if a todo is NOT completed we will check if the `todo--completed` class is not present
- to toggle if a todo is completed, we will click an element with class `todo--toggle-completed`
- to remove a todo we will click an element with a class `todo__button--remove`

### Running e2e tests

In this repository there's a `e2e`-folder that contains e2e-test using [Cypress.IO](http://cypress.io). This should be run separately from your application (your solution). You DO NOT need to copy this into the created react application.

1. Start your `todoreact`-application and ensure that it is running on `http://localhost:3000`
2. Run the e2e tests, in a separate terminal window

    ```bash
    cd e2e
    npm t
    ```

We have supplied a single e2e test that adds a todo to the list. You can (and should) add more tests to ensure that your application works according to the requirements. Use our test as a guide.

When correcting your test our test suite will contain more tests than the one that we have supplied.

### Handing in

- Check that you have no console errors.
- Make sure it runs from a clean `npm i && npm start`.
- Hand in the content of your react-app folder (except for the node_modules) in a folder named `todoreact` in your weekend test folder.

Make it work, and then if you have time, make it great!

| ![Todo](todo.png) |
|:---:|
| Example of a todo app |

## FAQ

Can we ignore Internet Explorer?
> Yes, you do not have to consider compatibility with Internet Explorer.

I'm so stuck, and I don't know how to get started!
> Take a break, you have all the information and skills you need to solve this. Go through one of the many guides out there until you understand how to make it work, then write your own solution. Once you understand how it goes together it will be fast to write it.

How will you judge our solutions?
> We are going to judge them based on functionality (50%, running an automated E2E-test suite, be careful using the correct the ids and classes above), and a code review where we confirm that the technical specification has been followed (50%). We will not judge the design.
