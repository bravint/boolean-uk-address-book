function updateState () {
  let obj = {
    "id": (state.contacts.length)+1,
    "firstName": document.querySelector("#first-name-input").value,
    "lastName": document.querySelector("#last-name-input").value,
    "blockContact": checkBlockStatus(),
    "addressId": (state.contacts.length)+1,
    address: {
      "id": state.contacts.length,
      "street": document.querySelector("#street-input").value,
      "city": document.querySelector("#city-input").value,
      "postCode": document.querySelector("#post-code-input").value
    }
  }
  state.contacts = [...state.contacts, obj];
};


function updateContact(id) {
  fetch(`http://localhost:3000/contacts/${id}`, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: "Nicolas" })
})
}

function updateDelete(id) {
  fetch(`http://localhost:3000/contacts/${id}`, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: "Nicolas" })
})
}

function updateAddress(id, obj2) {
  fetch(`http://localhost:3000/addresses/${id}`, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj2)
})

}

  const deleteClick = document.querySelector('#deleteBtn');
  deleteClick.addEventListener("click", function(event) {
    event.preventDefault();
    deleteContact(contact.id)
    main();
  })

  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let id = contact.id;
    checkEditedContact(contact ,id);
    main();
  })

  const editBtn = document.createElement("button");
  editBtn.className = "button blue";
  editBtn.setAttribute("type", "submit");
  editBtn.innerText = "Edit";

  divActionsEl.append(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "button blue";
  deleteBtn.id = "deleteBtn";
  deleteBtn.setAttribute("type", "submit");
  deleteBtn.innerText = "Delete";

  divActionsEl.append(deleteBtn);
  function renderNewContactForm() {

  viewSection.innerHTML = "";

  const formEl = document.createElement("form");
  formEl.className = "form-stack light-shadow center contact-form";

  viewSection.append(formEl);

  const headingEl = document.createElement("h1");
  headingEl.innerText = "Create Contact";

  formEl.append(headingEl);

  const labelFirstNameEl = createFormLabel("first-name-input", "First Name");
  formEl.append(labelFirstNameEl);
  const InputFirstNameEl = createFormInput("first-name-input", "text");

  formEl.append(InputFirstNameEl);

  const labelLastNameEl = createFormLabel("last-name-input", "Last Name");

  formEl.append(labelLastNameEl);

  const InputLastNameEl = createFormInput("last-name-input", "text");

  formEl.append(InputLastNameEl);

  const labelStreetEl = createFormLabel("street-input", "Street");

  formEl.append(labelStreetEl);

  const InputStreetEl = createFormInput("street-input", "text");

  formEl.append(InputStreetEl);

  const labelCityEl = createFormLabel("city-input", "City");

  formEl.append(labelCityEl);

  const InputCityEl = createFormInput("city-input", "text");

  formEl.append(InputCityEl);

  const labelPostCodeEl = createFormLabel("post-code-input", "Post Code");

  formEl.append(labelPostCodeEl);

  const InputPostCodeEl = createFormInput("post-code-input", "text");

  formEl.append(InputPostCodeEl);

  const divBlockEl = document.createElement("div");
  divBlockEl.className = "checkbox-section";

  formEl.append(divBlockEl);

  const labelBlockEl = createFormLabel("block-checkbox", "Block");

  divBlockEl.append(labelBlockEl);

  const InputBlockEl = createFormInput("block-checkbox", "checkbox");

  labelBlockEl.append(InputBlockEl);

  const divActionsEl = document.createElement("div");
  divActionsEl.className = "actions-section";

  formEl.append(divActionsEl);

  const submitBtn = document.createElement("button");
  submitBtn.className = "button blue";
  submitBtn.setAttribute("type", "submit");
  submitBtn.innerText = "Create";

  divActionsEl.append(submitBtn);

  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    pushContact();
    pushAddress();
    main();
  })
}

//fetchAPI ('PATCH', obj, id, contacts)

/*
function updateContact(id, obj, obj2, method) {
  fetch(`http://localhost:3000/contacts/${id}`, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
  .then(function(response) {
    if(response.ok) {
      fetch(`http://localhost:3000/addresses/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj2)
      })
    }
  })
}
*/

function updContact(id, obj, obj2, methodType) {
  fetch(`http://localhost:3000/contacts/${id}`, {
  method: methodType,
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
  .then(function(response) {
    if(response.ok) {
      fetch(`http://localhost:3000/addresses/${id}`, {
      method: methodType,
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj2)
      })
    }
  })
}

  console.log (checkBlockStatus());
  fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  body: JSON.stringify({

    function pushAddress () {
  fetch('http://localhost:3000/addresses', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  body: JSON.stringify({
    "id": (state.contacts.length)+1,
    "street": document.querySelector("#street-input").value,
    "city": document.querySelector("#city-input").value,
    "postCode": document.querySelector("#post-code-input").value
  })
  })
};

  const obj = {
    "firstName": document.querySelector("#first-name-input").value,
    "lastName": document.querySelector("#last-name-input").value,
    "blockContact": checkBlockStatus()
  }
  const obj2 = {
    "street": document.querySelector("#street-input").value,
    "city": document.querySelector("#city-input").value,
    "postCode": document.querySelector("#post-code-input").value
  }

function goToAPI () {
  if (fetchAPI ('POST', '', 'contacts', obj)) fetchAPI ('POST', '', 'addresses', obj2)
}

function editContact(contact ,id) {
  delete obj.id;
  delete obj.addressId
  delete obj2.id;
  if (obj.firstName === contact.firstName) delete obj.firstName;
  if (obj.lastName === contact.lastName) delete obj.lastName;
  if (obj.blockContact === contact.blockContact) delete obj.blockContact;
  if (obj2.street === contact.address.street) delete obj2.street;
  if (obj2.city === contact.address.city) delete obj2.city;
  if (obj2.postCode === contact.address.postCode) delete obj2.postCode;

  if ((Object.keys(obj).length !== 0) || (Object.keys(obj2).length !== 0)) goToAPI()
}

function fetchAPI (methodType, id = "", subdirectory, object) {
  fetch(`http://localhost:3000/${subdirectory}${id}`, {
    method: methodType,
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(object)
  })
  .then(function(response) {
    if (response.ok) state.response = true;
  })
};


    if (objContact.firstName === contact.firstName) delete objContact.firstName;
    if (objContact.lastName === contact.lastName) delete objContact.lastName;
    if (objContact.blockContact === contact.blockContact) delete objContact.blockContact;
    if (objAddress.street === contact.address.street) delete objAddress.street;
    if (objAddress.city === contact.address.city) delete objAddress.city;
    if (objAddress.postCode === contact.address.postCode) delete objAddress.postCode;

function checkChanges(obj, key) {
  const contact = state.selectedContact;
  if (obj[`${key}`] === contact[`${key}`]) {
    delete obj.key;
  }
}

    checkChanges (objContact, 'firstName')
    checkChanges (objContact, 'lastName')
    checkChanges (objContact, 'blockContact')
    checkChanges (objAddress, 'street')
    checkChanges (objAddress, 'city')
    checkChanges (objAddress, 'postCode')

    
  if (type == 'create') {
    const contact = state.contacts[state.contacts.length-1]
  } else { 
    const contact = state.selectedContact
  }

    id = state.selectedContact.id
  main();
  state.selectedContact = state.contacts.find(element => element.id === id);
  console.log(state.selectedContact)
  //renderContactView()