document.addEventListener("click", (e) => {

  if (e.target.dataset.short){
      const {short} = e.target.dataset
      const url = `http://localhost:3000/goTo/${short}`
      return copyContent(url);
  };

});
  


async function copyContent(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error('Failed to copy: ', err);
    /* Rejected - text failed to copy to the clipboard */
  }
};