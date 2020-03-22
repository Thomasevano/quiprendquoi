if (navigator.clipboard) {
  console.log("support du presse papier")
  document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = "Copier le lien de l'évenement";
    $button.className = "btn btn-secondary mr-3"
    $clipboardEl.parentNode.append($button);
    $button.addEventListener('click', copyToClipboard.bind(this, $clipboardEl, $button));
  });
}
else {
  console.warn("pas de support")
}

function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
    .writeText($clipboardEl.getAttribute('data-clipboard'))
    .then(() => {
      $button.innerHTML = 'Copié !';
      setTimeout(() => ($button.innerHTML = "Copier le lien de l'évenement"), 2000);
    })
    .catch((err) => console.warn(err))
}