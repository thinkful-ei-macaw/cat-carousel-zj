function handleCatClicks() {
  $('.thumbnail').on('click', e => {
    const targetCat = $(e.currentTarget);

    const otherCat = $('.thumbnail').not(targetCat);
    
    console.log(e.target);
  });
}

$(handleCatClicks);