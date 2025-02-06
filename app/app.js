const render = async (name) => {
  const component = document.querySelector(`component[name="${name}"]`);

  if (component) {
    const path = `../components/${name}/`;
    const response = await fetch(`${path}${name}.html`);
    const text = await response.text();

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    component.replaceWith(...tempDiv.childNodes);

    const responseJS = await fetch(`${path}${name}.js`);
    if (responseJS.status === 200) {
      const textJS = await responseJS.text();
      const newScript = document.createElement('script');
      newScript.textContent = textJS;
      document.body.appendChild(newScript);
    }
  }
}

const scriptLoader = () => {
  const list = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
    "lib/wow/wow.min.js",
    "lib/easing/easing.min.js",
    "lib/waypoints/waypoints.min.js",
    "lib/counterup/counterup.min.js",
    "lib/owlcarousel/owl.carousel.min.js",
    "lib/isotope/isotope.pkgd.min.js",
    "lib/lightbox/js/lightbox.min.js",
    "js/main.js"
  ];

  list.map(src => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await render('head-component');
  await render('navigation-component');
  await render('service-component');
  await render('consulting-component');
  await render('about-component');
  await render('footer-component');

  scriptLoader();
});
