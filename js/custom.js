(function () {
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let time = String(`${hours}:${minutes}`)
    console.log(time);
    document.getElementById("ariaLiveExample").textContent = time;
  }, 30000);//there is an opportunity to put 60000ms, but then the idea with the digital clock will be extremely strange :)
})();

document.querySelectorAll("#nav li").forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

(function () {
  let burger = document.querySelector(".burger");
  let menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

document.querySelectorAll("#nav li").forEach(function (navEl) {
  navEl.onclick = function () {
    toggleTab(this.id, this.dataset.target);
  };
});

function toggleTab(selectedNav, targetId) {
  let navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function (navEl) {
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
    } else {
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
    }
  });

  let tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function (tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

document.querySelectorAll("#hasSubmenuBtn")[0].onclick = function (e) {
  showHideMenu(e);
};

document.querySelectorAll("#hasSubmenuBtn")[0].onkeydown = function (e) {
  let code = e.code;
  let shiftKey = e.shiftKey;

  e.preventDefault();

  if (code === "Enter" || code === "Space") {
    showHideMenu(e);
  }

  if (code === "Tab" && !shiftKey) {
    document.querySelectorAll("#examplesLink")[0].focus();
    hideMenu();
  }

  if (code === "Tab" && shiftKey) {
    document.querySelectorAll("#homeLink")[0].focus();
    hideMenu();
  }
};

// Header menu links
document.querySelectorAll("#hasSubmenuItem a").forEach(function (navEl) {
  navEl.onkeydown = function (e) {
    let button = document.querySelectorAll("#hasSubmenuBtn")[0];
    let linksLength = document.querySelectorAll("#hasSubmenuItem a").length;
    let activeElDataId = +this.dataset.index || 0;
    let code = e.code;
    let shiftKey = e.shiftKey;

    e.preventDefault();

    if (code === "Tab" && !shiftKey) {
      document.querySelectorAll("#documentationLink")[0].focus();
      hideMenu();
    }

    if (code === "Tab" && shiftKey) {
      document.querySelectorAll("#homeLink")[0].focus();
      hideMenu();
    }

    if (code === "Escape") {
      hideMenu();
      button.focus();
    }

    if (code === "Enter" || code === "Space") {
      window.location.assign(this.href);
    }

    if (code === "Home") {
      setTabFocus("hasSubmenuItem1");
    }

    if (code === "End") {
      setTabFocus("hasSubmenuItem" + linksLength);
    }

    if (code === "ArrowUp") {
      if (this.id === "hasSubmenuItem1") {
        setTabFocus("hasSubmenuItem" + linksLength);
      } else {
        setTabFocus("hasSubmenuItem" + (activeElDataId - 1));
      }
    }

    if (code === "ArrowDown") {
      if (this.id === "hasSubmenuItem" + linksLength) {
        setTabFocus("hasSubmenuItem1");
      } else {
        setTabFocus("hasSubmenuItem" + (activeElDataId + 1));
      }
    }
  };
});

function showHideMenu() {
  let menu = document.querySelectorAll("#hasSubmenuItem")[0];

  if (menu.style.display === "block") {
    hideMenu();
  } else {
    showMenu();
    setTabFocus("hasSubmenuItem1");
  }
}

function showMenu() {
  let menu = document.querySelectorAll("#hasSubmenuItem")[0];
  let button = document.querySelectorAll("#hasSubmenuBtn")[0];

  button.setAttribute("aria-expanded", true);
  menu.style.display = "block";
  menu.style.opacity = "1";
  menu.style.pointerEvents = "auto";
  menu.setAttribute("hidden", false);
}

function hideMenu() {
  let menu = document.querySelectorAll("#hasSubmenuItem")[0];
  let button = document.querySelectorAll("#hasSubmenuBtn")[0];

  button.setAttribute("aria-expanded", false);
  menu.style.display = "none";
  menu.style.opacity = "0";
  menu.style.pointerEvents = "none";
  menu.setAttribute("hidden", true);
}

function setTabFocus(selectedNav) {
  let navEl = document.querySelectorAll("#" + selectedNav)[0];

  navEl.focus();
}