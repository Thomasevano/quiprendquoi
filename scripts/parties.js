if(typeof party !== 'undefined') {
  console.log(party)
  localStorage.setItem(location.href, party.name);
}

const ul = document.querySelector('.list-group');
setInterval(fetchItems, 60000)

function fetchItems() {
  fetch(`http://bastiencalou.fr:3000/party/${party._id}`)
  .then( res => res.json(), ul.innerHTML = '')
  .then( data => data.items.forEach(itemElement => {
    const li = document.createElement('li');
    const form = document.createElement('form');
    const button = document.createElement('button')
    const i = document.createElement('i');
    form.setAttribute('action', `/party/${party._id}/items/${itemElement._id}?_method=DELETE`);
    form.setAttribute('method', 'post');
    form.className = 'ml-3';
    button.setAttribute('type', 'submit');
    button.className ='btn btn-danger';
    i.className = 'fa fa-trash';
    li.className = 'list-group-item';
    li.textContent = `${itemElement.user} ramene ${itemElement.name}`;
    button.appendChild(i);
    form.appendChild(button);
    li.appendChild(form);
    ul.appendChild(li);
  }))
}

let stateMessage = '';
if (stateMessage != undefined || stateMessage != '') {
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
}