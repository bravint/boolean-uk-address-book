const viewSection = document.querySelector(".view-section");
const contactsSection = document.querySelector(".contacts-section");

const state = {
  contacts: [],
  selectedContact: null,
};

/* [START] NO NEED TO EDIT */

function getContacts() {
  fetch("http://localhost:3000/contacts")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      state.contacts = data;
      renderContactsList();
    });
}

function renderContactsList() {
  const listEl = document.createElement("ul");
  listEl.className = "contacts-list";

  for (let i = 0; i < state.contacts.length; i++) {
    const contact = state.contacts[i];
    const listItemEl = renderContactListItem(contact);
    listEl.append(listItemEl);
  }

  contactsSection.append(listEl);
}

function renderAddressSection(address) {
  const containerEl = document.createElement("section");

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Address";
  containerEl.append(headingEl);

  const streetText = document.createElement("p");
  streetText.innerText = address.street;
  containerEl.append(streetText);

  const cityText = document.createElement("p");
  cityText.innerText = address.city;
  containerEl.append(cityText);

  const postCodeText = document.createElement("p");
  postCodeText.innerText = address.postCode;
  containerEl.append(postCodeText);

  return containerEl;
}

function renderContactView() {
  const contact = state.selectedContact;
  console.log (contact)
  if (!contact) return;

  viewSection.innerHTML = "";

  const containerEl = document.createElement("article");
  containerEl.className = "center light-shadow address-card";

  const headingEl = document.createElement("h1");
  const fullName = `${contact.firstName} ${contact.lastName}`;
  headingEl.innerText = fullName;
  containerEl.append(headingEl);

  const addressSectionEl = renderAddressSection(contact.address);
  containerEl.append(addressSectionEl);

  viewSection.append(containerEl);
}

/* [END] NO NEED TO EDIT */

function renderContactListItem(contact) {
  const listItemEl = document.createElement("li");

  const headingEl = document.createElement("h3");

  const fullName = `${contact.firstName} ${contact.lastName}`;

  headingEl.innerText = fullName;

  listItemEl.append(headingEl);

  const viewBtn = document.createElement("button");
  viewBtn.className = "button grey";
  viewBtn.innerText = "View";

  viewBtn.addEventListener("click", function () {
    state.selectedContact = contact;
    renderContactView();
  });

  listItemEl.append(viewBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", function () {
    state.selectedContact = contact;
    renderForm(contact, 'edit')
  });

  listItemEl.append(editBtn);

  return listItemEl;
}

function listenNewContactButton() {
  const btn = document.querySelector(".new-contact-btn");

  btn.addEventListener("click", function () {
    renderForm('', 'create');
  });
}

function createFormLabel(attributeFor, text) {
  const labelEl = document.createElement("label")
  labelEl.setAttribute("for", attributeFor);
  labelEl.innerText = text;
  return labelEl;
}

function createFormInput(id, type){
  const inputEl = document.createElement("input")
  inputEl.id = id;
  inputEl.setAttribute("name", id);
  inputEl.setAttribute("type", type);
  return inputEl;
}

function renderForm(contact, type) {

  viewSection.innerHTML = "";

  const formEl = document.createElement("form");
  formEl.className = "form-stack light-shadow center contact-form";
  viewSection.append(formEl);

  const headingEl = document.createElement("h1");
  formEl.append(headingEl);

  const labelFirstNameEl = createFormLabel("first-name-input", "First Name");
  formEl.append(labelFirstNameEl);

  const inputFirstNameEl = createFormInput("first-name-input", "text");
  formEl.append(inputFirstNameEl);

  const labelLastNameEl = createFormLabel("last-name-input", "Last Name");
  formEl.append(labelLastNameEl);

  const inputLastNameEl = createFormInput("last-name-input", "text");
  formEl.append(inputLastNameEl);

  const labelStreetEl = createFormLabel("street-input", "Street");
  formEl.append(labelStreetEl);

  const inputStreetEl = createFormInput("street-input", "text");
  formEl.append(inputStreetEl);

  const labelCityEl = createFormLabel("city-input", "City");
  formEl.append(labelCityEl);

  const inputCityEl = createFormInput("city-input", "text");
  formEl.append(inputCityEl);

  const labelPostCodeEl = createFormLabel("post-code-input", "Post Code");
  formEl.append(labelPostCodeEl);

  const inputPostCodeEl = createFormInput("post-code-input", "text");
  formEl.append(inputPostCodeEl);

  const divBlockEl = document.createElement("div");
  divBlockEl.className = "checkbox-section";
  formEl.append(divBlockEl);

  const labelBlockEl = createFormLabel("block-checkbox", "Block");
  divBlockEl.append(labelBlockEl);

  const InputBlockEl = createFormInput("block-checkbox", "checkbox");
  if (contact.blockContact) InputBlockEl.checked = true;

  labelBlockEl.append(InputBlockEl);

  const divActionsEl = document.createElement("div");
  divActionsEl.className = "actions-section";
  formEl.append(divActionsEl);

  if (type == 'edit') {
    headingEl.innerText = "Edit Contact";
    inputFirstNameEl.value = `${contact.firstName}`;
    inputLastNameEl.value = `${contact.lastName}`;
    inputStreetEl.value = `${contact.address.street}`;
    inputCityEl.value = `${contact.address.city}`;
    inputPostCodeEl.value = `${contact.address.postCode}`;
    const editBtn = createElButton('Edit');
    const deleteBtn = createElButton('Delete', 'deleteBtn');
    divActionsEl.append(deleteBtn, editBtn);
    eventEdit();
    eventDelete();
  }

  if (type == 'create') {
    headingEl.innerText = "Create Contact";
    const submitBtn = createElButton('Create');
    divActionsEl.append(submitBtn);
    eventCreate();
  }
}

function createElButton (text, btnId = "") {
  const button = document.createElement("button");
  button.className = "button blue";
  button.id = btnId;
  button.setAttribute("type", "submit");
  button.innerText = text;
  return button;
}

function eventDelete() {
  const deleteClick = document.querySelector('#deleteBtn');
  deleteClick.addEventListener("click", function() {
    const contact = state.selectedContact;
    deleteContact(contact.id);
    main();
  })
}

function eventEdit() {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const contact = state.selectedContact;
    generateContact(contact, contact.id, 'edit');
  })
}

function eventCreate() {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    generateContact('', '', 'create');
  })
}

function checkBlockStatus () {
  return (document.querySelector("#block-checkbox").checked ? true : false);
};

function generateContact(contact, id, type) {
  const newId = (state.contacts[state.contacts.length-1].id)+1
  const objContact = {
    "id": newId,
    "firstName": document.querySelector("#first-name-input").value,
    "lastName": document.querySelector("#last-name-input").value,
    "blockContact": checkBlockStatus(),
    "addressId": newId
  }

  const objAddress = {
    "id": newId,
    "street": document.querySelector("#street-input").value,
    "city": document.querySelector("#city-input").value,
    "postCode": document.querySelector("#post-code-input").value
  }

  if (type == 'create') {
    pushContactToJSON('POST', '', objContact, objAddress);
  }

  if (type == 'edit') {
    delete objContact.id;
    delete objContact.addressId
    delete objAddress.id;

    checkChanges (objContact, contact)
    checkChanges (objAddress, contact.address)

    if ((Object.keys(objContact).length !== 0) || (Object.keys(objAddress).length !== 0)) {
      pushContactToJSON('PATCH', id, objContact, objAddress);
    } 
  } 
}

function checkChanges(object, contact) {
  for (const key in object) {
    if (object[`${key}`] === contact[`${key}`]) {
      delete object[`${key}`];
    }
  }
}

function pushContactToJSON (methodType, id = "", objContact, objAddress) {
  fetch(`http://localhost:3000/contacts/${id}`, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(objContact)
  })
  .then(function(response) {
    if (response.ok) {
      fetch(`http://localhost:3000/addresses/${id}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objAddress)
      })
    postJSONUpdate();
    }
  })
}

function postJSONUpdate() {
  const ul = document.querySelector('.contacts-list');
  ul.remove();
  getContacts();
}

function deleteContact(id) {
  fetch(`http://localhost:3000/contacts/${id}`, {
  method: 'DELETE'
  })
  .then(function(response) {
    if (response.ok) {
      fetch(`http://localhost:3000/addresses/${id}`, {
        method: 'DELETE'
      })
    postJSONUpdate();
    }
  })
}

function main() {
  listenNewContactButton();
  getContacts();
}

main();