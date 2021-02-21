export const openURL = (url: string) => {
  const newWindow = window.open(url, '_blank');
  newWindow.focus();
};
