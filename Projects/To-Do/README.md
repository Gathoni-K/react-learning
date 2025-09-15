# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

****Styling a React application.
-There are for ways to do that:
1.Inline styling:
adding individual styles to the HTML elements.
2. Using a CSS stylesheet.
define a single css file and define classes and apply them to each field you have.
3. CSS modules.
Is similar to number 2, but here, we have a stylesheet for every signle component.
4. Libraries like Tailwind CSS.


**What happens when there are states that we need to share across components:
-instead of storing it in either component, store our state in our parent component.
-Then pass the state to the components as props.


**Adding our compkete task functionality:
-Declare the initial value of our state variable as an object, with properties name, and done. The name property is a string and the done property a boolea, value is false initially.
-As is an object to access the properties: objectName.property,
implement this in all the needed components: Form, ToDoLIst, ToDoItem.
-Whenever we click on a task, we want to toggle the done property of a task, how to do that?
-Need to handle the onClick of the particular task.
Flow: click on a task, the task is striked out, consider the 'onClick' attribute.
-Marking our item as completed:
-on clicking on our task, the status of our task changes from false to true, how?


***Counting comleted and total todos:
-loop through the given list, find the done items then calculate the total completed items.
-Need to filter only the completed tasks: 
    'todos.filter((todo) => todo.done).length'
    //this line gives us access to all the tasks that are completed and gives us their total.
-Create a component where we will store this information, our footer.
-In the footer, display the data we need.


**Sorting items in a To-Do List.
-sort the items depending on if they are completed or not.
-We will be dealing with how sorting works. '.sort()' - method responsible for this.
-We need to create a new sorted todo list, create 





