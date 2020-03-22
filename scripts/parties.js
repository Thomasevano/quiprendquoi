if(typeof party !== 'undefined') {
  console.log(party)
  setInterval(fetchItems, 5000)
  localStorage.setItem(location.href, party.name);
}

import { start } from 'turbolinks';
start()

function fetchItems() {
  const ul = document.querySelector('.list-group');
  fetch(`http://bastiencalou.fr:3000/party/${party._id}`)
  .then( res => res.json())
  .then( data =>
    {
      if(JSON.stringify(data.items) !== JSON.stringify(party.items)) {
        ul.innerHTML = '';
        data.items.forEach(itemElement => {
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
        })
      }
    }
  )
}

if (typeof stateMessage !== 'undefined') {
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
}