let observer1 = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting)
      document.querySelector(".nav").classList.add("hidden");
  },
  {
    root: null,
    threshold: 0.9,
  }
);

let observer2 = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting)
      document.querySelector(".nav").classList.remove("hidden");
  },
  {
    root: null,
    threshold: 0.2,
  }
);

observer2.observe(document.querySelector("#section-1"));
observer1.observe(document.querySelector("#section-2"));
