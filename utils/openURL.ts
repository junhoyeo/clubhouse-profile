export const openURL = (url: string) => {
  try {
    const newWindow = window.open(url, '_blank');
    newWindow?.focus();
  } catch (e) {
    console.log(e);
  }
};
