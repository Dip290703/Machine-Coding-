document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // remove active from all content
      contents.forEach(c => c.classList.remove("active"));

      // add active to clicked tab
      tab.classList.add("active");
      // show related content
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
});
