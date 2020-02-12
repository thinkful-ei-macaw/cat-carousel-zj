function handleCatClicks() {
  $('.thumbnail').on('click', e => {
    console.log(e.target);
  });
}

$(handleCatClicks);