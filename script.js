const gitlineElement = document.querySelector('.ghome');
const about = document.getElementById("about");

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const aboutheight = entry.contentRect.height;
    gitlineElement.style.height = aboutheight + "px";
  }
});

resizeObserver.observe(about);