export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
export const showAlert = (message, status) => {
  hideAlert();

  const color = status === 'success' ? 'bg-green-300' : 'bg-red-300';
  const markup = `<div class="alert p-3 absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color} ">${message}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 5000);
};
