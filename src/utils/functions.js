//for some funtions
export function isStringEmpty(str) {
  return /^\s*$/.test(str);
}

export function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
