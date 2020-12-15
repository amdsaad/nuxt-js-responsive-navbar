const header = document.querySelector("header");

let options = {
  root: null,
  threshold: 0.9,
  rootMargin: "80px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("haeder-dark");
      return;
    }
    header.classList.remove("haeder-dark");
  });
}, options);

observer.observe(document.querySelector("#inter").children[0]);
