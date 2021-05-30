class Navbar extends HTMLElement {
  set title (title) {
    this.title = title
    this.render()
  }

  render () {
    this.innerHTML = `
    <nav class="navbar">
        <a href="#" class="nav-logo">WebDev.</a>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>`
  }
}

customElements.define('navbar-element', Navbar)