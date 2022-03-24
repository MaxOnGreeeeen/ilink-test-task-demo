export const getSlidesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const fillPages = (totalPages, currentSlide) => {
  let slides = [];

  for (let i = 0; i < totalPages; i++) {
    if (i === currentSlide) slides.push(true);
    if (i !== currentSlide) slides.push(false);
  }
  return slides;
};
