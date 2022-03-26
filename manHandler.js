//#region  editClass Handler

//#region  login show/close

const contLog = document.getElementById("container-log");
const closeBtn = document.getElementById("close-btn");

document
  .getElementById("log-btn")
  .addEventListener("click", () => editClass(contLog, true, "active"));

contLog.addEventListener("click", () => editClass(contLog, false, "active"));
closeBtn.addEventListener("click", () => editClass(contLog, false, "active"));

//#endregion

/**
 * simple function to handle multiple EventListeners
 * @param {HTMLElement} element HTMLElement to edit
 * @param {bool} isActive add/remove class depending by isActive parameter
 * @param {string} className name of class to add/remove
 */
let editClass = (element, isActive, className) =>
  isActive
    ? element.classList.add(className)
    : element.classList.remove(className);

//#endregion
