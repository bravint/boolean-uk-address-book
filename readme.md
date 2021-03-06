Repo: boolean-uk-address-book

Description
In this exercise we are going to practice fetch and CRUD with a large form and multiple endpoints.

Some of the render functions have been done for you, read the comments to know what to do with each piece of code.

Deliverables
- A user can create a contact via a form when the "New Contact" button is clicked
    - the created contact should have:
        - first name
        - last name
        - street
        - city
        - post code
        - an option to block the contact
    - the created contact should be saved in the database
    - the created contact should be added to the contacts list
- A useer can edit a contact via a form when the "Edit" button is clicked
    - the updated contact should be saved in the database
    - the updated contact should be viewable in the UI
    - the selected contact can also be deleted from the edit contact form
- When a user submits a form they should be redirected to see the changes
    - Use renderContactView to do this.

Instructions
- Download files from: https://codesandbox.io/s/address-book-starter-template-4zvw7?file=/src/index.js
- Run this command in the project directory json-server --watch db/db.json --routes db/routes.json --static .
- Look for [TODO] Write Code for hints on where you need to write code
- Create fetch functions for create and edit
- Create action functions to update state
- Create render functions for your forms

Tips
- Check db/db.json and think about which URLs you are going to need when creating your fetch functions.
- Use state to keep track of changes and render the UI.