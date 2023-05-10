/**
 * TODO:
 *  - inject modal thru JS
 *  - add cmd + k indicator
 *
 */

function changeTextOrSource(
  element: HTMLElement | HTMLAnchorElement | null,
  text: string
) {
  if (!element) return;

  if (element instanceof HTMLAnchorElement) {
    element.setAttribute("href", text);
    return;
  }

  if (element instanceof HTMLElement) {
    element.textContent = text;
    return;
  }
}

function changeProjectInformation() {
  const projectName = document.querySelector<HTMLElement>(".project__name");
  const projectLink =
    document.querySelector<HTMLAnchorElement>(".project__link");
  const projectRepository = document.querySelector<HTMLAnchorElement>(
    ".project__repository"
  );

  const { VITE_PROJECT_NAME, VITE_PROJECT_LINK, VITE_PROJECT_REPOSITORY } =
    import.meta.env;

  changeTextOrSource(projectName, VITE_PROJECT_NAME);
  changeTextOrSource(projectLink, VITE_PROJECT_LINK);
  changeTextOrSource(projectRepository, VITE_PROJECT_REPOSITORY);
}

function keyDownListener(
  this: HTMLDivElement,
  { metaKey, key }: KeyboardEvent
) {
  // window.navigator.platform === "MacIntel";

  if (metaKey && key === "k") {
    this.style.display = "block";

    document
      .querySelector<HTMLButtonElement>(".modal__close")
      ?.addEventListener("click", () => {
        this.style.display = "none";
      });

    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  }

  if (key === "Escape") {
    this.style.display = "none";
  }
}

(function () {
  const modal = document.querySelector<HTMLDivElement>(".modal");
  if (!modal) return;

  changeProjectInformation();

  document.addEventListener("keydown", keyDownListener.bind(modal));
})();
