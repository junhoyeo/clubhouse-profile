export const copyToClipboard = (message: string) => {
  const input = document.createElement('input');
  input.value = message;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
};
