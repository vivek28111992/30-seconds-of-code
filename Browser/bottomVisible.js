// Bottom Visible
// Use scrollY, scrollHeight and clientHeight to determine if the bottom of the page is visible.

const bottomVisible = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
const result = bottomVisible();
console.log(result);