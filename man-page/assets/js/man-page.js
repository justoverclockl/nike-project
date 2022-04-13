//#region  editClass Handler

const contLog = document.getElementById("container-log");
const closeBtn = document.querySelectorAll("#close-btn");
const recoveryPass = document.getElementById("recovery-pass");
const textLogo = document.getElementById("info-logo");
const termsPass = document.getElementById("terms-pass");
const userPassword = document.getElementById("user-password");
const disableLogin = document.getElementById("disable-login");
const infoButton = document.getElementById("info-button");
const infoText = document.getElementById("info-text");
const registerBlock = document.getElementById("register-block");
const termsRegister = document.getElementById("terms-register");
const checkMan = document.getElementById("gender-man");
const checkWoman = document.getElementById("gender-woman");
const nlButton = document.getElementById("nl-button");
const nlModal = document.getElementById("nl-modal");

//#region show login modal

document.getElementById("log-btn").addEventListener("click", () => {
  editByDiffIndex(
    [contLog, textLogo.children, infoButton.children, infoText.children],
    true,
    "active",
    0
  );
  for (let element of registerBlock.children) {
    element.disabled = true;
  }
  userPassword.disabled = false;
});

//#endregion

//#region close login modal

// login modal, close if click outside
contLog.addEventListener("click", (element) => {
  if (element.target == contLog) {
    editByDiffIndex(
      [
        disableLogin,
        userPassword,
        termsPass,
        contLog,
        registerBlock,
        textLogo.children,
        infoButton.children,
        infoText.children,
      ],
      false,
      "active"
    );
  }
});

// newsletter modal, close if click outside
nlModal.addEventListener("click", (element) => {
  if (element.target == nlModal) {
    editClass(nlModal, false, "active");
  }
});

// X button
closeBtn.forEach((btn) => {
  btn.addEventListener("click", () =>
    editByDiffIndex(
      [
        nlModal,
        disableLogin,
        userPassword,
        termsPass,
        contLog,
        registerBlock,
        textLogo.children,
        infoButton.children,
        infoText.children,
      ],
      false,
      "active"
    )
  );
});

//#endregion

//#region login modal change

// Recovery Password
recoveryPass.addEventListener("click", () => {
  editByDiffIndex(
    [
      termsPass,
      userPassword,
      disableLogin,
      textLogo.children,
      infoButton.children,
      infoText.children,
    ],
    true,
    "active",
    1
  );
  for (let element of registerBlock.children) {
    element.disabled = true;
  }
  userPassword.disabled = true;
});

// Register
infoText.children[0].addEventListener("click", () => {
  editByDiffIndex(
    [
      registerBlock,
      disableLogin,
      termsRegister,
      textLogo.children,
      infoButton.children,
      infoText.children,
    ],
    true,
    "active",
    2
  );
  for (let element of registerBlock.children) {
    element.disabled = false;
  }
  userPassword.disabled = false;

  // man - woman button click
  // seems hardcode, can't find better way to implement that
  checkMan.addEventListener("change", () => {
    if (checkMan.checked) {
      checkWoman.checked = false;
    }
  });
  checkWoman.addEventListener("change", () => {
    if (checkWoman.checked) {
      checkMan.checked = false;
    }
  });
});

// Login close password
infoText.children[1].addEventListener("click", () => {
  editByDiffIndex(
    [
      termsPass,
      userPassword,
      disableLogin,
      textLogo.children,
      infoButton.children,
      infoText.children,
    ],
    false,
    "active",
    0
  );
  userPassword.disabled = false;
});

// Login close register
infoText.children[2].addEventListener("click", () => {
  editByDiffIndex(
    [
      registerBlock,
      disableLogin,
      termsRegister,
      textLogo.children,
      infoButton.children,
      infoText.children,
    ],
    false,
    "active",
    2
  );
  for (let element of registerBlock.children) {
    element.disabled = true;
  }
});

//#endregion

/**
 * simple function to handle multiple EventListeners
 * @param {HTMLElement} element HTMLElement to edit
 * @param {bool} isActive add/remove class depending by isActive parameter
 * @param {string} className name of class to add/remove
 */
function editClass(element, isActive, className) {
  if (element !== undefined)
    isActive
      ? element.classList.add(className)
      : element.classList.remove(className);
}

/**
 * Edit ElementsList depending by index inverted.
 * Indicate @param index will always return @function editClass to true,
 * so the others will return false.
 * Leave to null @param index if you want to set value of @param isActive to every elements.
 * @param {object} parent
 * @param {bool} isActive
 * @param {string} className
 * @param {*} index
 */
function editByDiffIndex(parent, isActive, className, index = null) {
  parent.map((node) => {
    if (node instanceof HTMLElement) {
      editClass(node, isActive, className);
    } else {
      for (let i = 0; i < parent.length; i++) {
        if (index !== null) {
          if (node[i] === node[index]) editClass(node[i], true, className);
          else editClass(node[i], false, className);
        } else editClass(node[i], isActive, className);
      }
    }
  });
}

/**
 * run form login/register/recovery password
 * @param {*} element
 * @param {HTMLElement} form
 */
function runForm(element, form) {
  if (
    element.target.classList.contains("active") ||
    element.target.classList.contains("nl-btn")
  ) {
    event.preventDefault();
    let haveNullInput = false;
    const account = {};

    let inputs = form.elements;

    for (let input of inputs) {
      if (!input.disabled && input.type != "submit") {
        if (!input.value) {
          alert("Inserisci correttamente tutti i valori!");
          return false;
        } else {
          haveNullInput = true;
        }
        switch (input.name) {
          case "email":
            account.email = input.value;
            break;

          case "password":
            account.password = input.value;
            break;

          case "firstName":
            account.name = input.value;
            break;

          case "surname":
            account.surname = input.value;
            break;

          case "date":
            account.date = input.value;
            break;

          case "country":
            account.country = input.value;
            break;

          case "nl-gender":
            account.gender = input.value;
            break;

          case "man":
            if (input.checked) account.gender = input.name;
            break;

          case "woman":
            if (input.checked) account.gender = input.name;
            break;
        }
        if (input.type != "checkbox") input.value = "";
        else input.checked = false;
      }
    }

    console.log(account);
    return haveNullInput;
  }
}

//#endregion

//#region getInput form

const form = document.getElementById("login-form");
const nlForm = document.getElementById("nl-form");

infoButton.addEventListener("click", (element) => runForm(element, form));
nlButton.addEventListener("click", (element) => {
  if (runForm(element, nlForm)) {
    editClass(nlModal, true, "active");
  }
});

//#endregion

//#region Animation scroll carousel

document.querySelectorAll(".icons-trend").forEach((node) => {
  node.addEventListener("click", (element) => {
    const carousel = element.target.closest(".carousel-trend");
    const btn = element.target.closest(".icon-trend");
    const firstButton = node.children[0];
    for (let carouselElement of carousel.children) {
      if (carouselElement.classList.contains("container-trend")) {
        const scrollX = carouselElement.scrollLeft;
        carouselElement.scroll({
          left:
            // check if current button is the same,
            // if isn't, invert the direction
            btn != firstButton ? scrollX + 600 : scrollX - 600,
          behavior: "smooth",
        });
        carouselElement.addEventListener("scroll", (e) => {
          // condition required because behavior smooth
          // trigger too many times scroll event
          if (e.target.scrollLeft > 0 && e.target.scrollLeft <= 1) {
            editClass(firstButton, true, "active");
          } else if (e.target.scrollLeft === 0) {
            editClass(firstButton, false, "active");
          }
        });
      }
    }
  });
});

//#endregion

//#region Cookie settings handler

const cookieModal = document.getElementById("cookie-modal");
const acceptCookie = document.getElementById("accept-cookie");

acceptCookie.addEventListener("click", () => {
  sessionStorage.setItem("setCookie", "randomUser");
  editClass(cookieModal, false, "active");
});

window.addEventListener("load", () => {
  if (!sessionStorage.getItem("setCookie"))
    editClass(cookieModal, true, "active");
});

//#endregion
