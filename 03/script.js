const tabData = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "This is content for tab 1",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "This is content for tab 2",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "This is content for tab 3",
  },
  // add more tabs here if needed
];

document.addEventListener("DOMContentLoaded", function () {
  let activeTab = tabData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");

    tabData.forEach((tab) => {
      // Create tab button
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id); // ✅ fixed: use data-tab
      tabContainer.appendChild(tabButton);

      // Create tab content
      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });

    // Event delegation for tab switching
    tabContainer.addEventListener("click", function (event) {
      if (event.target.matches(".tabLinks")) {
        const tabId = event.target.getAttribute("data-tab");
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabContents = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabLinks");

    // Reset all
    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabLinks.forEach((tab) => tab.classList.remove("active"));

    // Activate selected
    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-tab="${tabId}"]`)
      .classList.add("active");
  }

  // Render tabs on load
  renderTabs();
  openTab(activeTab); // ✅ ensures first tab is active
});
