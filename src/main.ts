(function () {
  const title = document.querySelector("title");
  if (!title) return;

  title.textContent = import.meta.env.VITE_PROJECT_NAME;
})();
