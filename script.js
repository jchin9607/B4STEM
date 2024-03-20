function setElementHeight(elementSelector, targetElementId) {
  const element = document.querySelector(elementSelector);
  const target = document.getElementById(targetElementId);

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const height = entry.contentRect.height;
      element.style.height = height + "px";
    }
  });

  resizeObserver.observe(target);
}

setElementHeight('.ghome', 'about');
setElementHeight('.gres', 'resources');

const gitlines = document.querySelectorAll('.gl');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.target.classList.contains("gitline-show") && entry.isIntersecting) {
      entry.target.classList.add("gitline-show");
    }
  })
}, {
  threshold: 0.3,
});

gitlines.forEach(gitline => {
  observer.observe(gitline);
});

function goHome() {
    window.location.href = "index.html#home";
}