function createNav() {
  var previous = "";
  var current = "Home";

  document.querySelectorAll(".navbar__item").forEach(function (element) {
    element.onclick = function (event) {
      event.preventDefault();

      var to = event.target.getAttribute("href");
      push(to);

      changemainListDive();
    };
  });

  function push(to) {
    previous = current;
    current = to;

    changePage();
    changeNavItem();
  }

  function changemainListDive() {
    var manListDive = document.querySelector("#mainListDiv");
    manListDive.classList.remove("show_list");
  }

  function changePage() {
    var previousPage = document.querySelector("#" + previous);
    var page = document.querySelector("#" + current);

    var className = "card--active";

    previousPage.classList.remove(className);
    page.classList.add(className);
  }

  function changeNavItem() {
    var previousNavItem = document.querySelector('[href="' + previous + '"]');
    var navItem = document.querySelector('[href="' + current + '"]');

    var className = "navbar__item--active";

    previousNavItem.classList.remove(className);
    navItem.classList.add(className);
  }
}

function main() {
  createNav();
}

main();

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
