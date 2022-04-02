//#region  editClass Handler

const contLog = document.getElementById("container-log");
const closeBtn = document.getElementById("close-btn");
const recoveryPass = document.getElementById("recovery-pass");
const textLogo = document.getElementById("info-logo");
const termsPass = document.getElementById("terms-pass");
const userPassword = document.getElementById("user-password");
const disableLogin = document.getElementById("disable-login");
const infoButton = document.getElementById("info-button");
const infoText = document.getElementById("info-text");
const registerBlock = document.getElementById("register-block");
const termsRegister = document.getElementById("terms-register");

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
});

//#endregion

//#region close login modal

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

closeBtn.addEventListener("click", () =>
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
  )
);

//#endregion

//#region login modal change

// Recovery Password
recoveryPass.addEventListener("click", () =>
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
  )
);

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
});

// Login close password
infoText.children[1].addEventListener("click", () =>
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
  )
);

// Login close register
infoText.children[2].addEventListener("click", () =>
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
  )
);

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

//#endregion

//#region getInput

const form = document.getElementById("login-form");

infoButton.addEventListener("click", (element) => {
  if (element.target.classList.contains("active")) {
    event.preventDefault();
    const account = {};

    let inputs = form.elements;

    for (let input of inputs) {
      if (
        !input.disabled &&
        input.type != "checkbox" &&
        input.type != "submit"
      ) {
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

          case "man":
            account.gender = input.value;
            break;

          case "woman":
            account.gender = input.value;
            break;
        }
      }
      input.value = "";
    }

    console.log(account);
  }
});

//#endregion
