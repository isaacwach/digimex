class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="navigation">
      <nav class="navbar navbar-expand-md">
        <div class="logo"><img src="images/Logo 2 1.png" alt=""></div>
        <button class="mnubtn navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            Menu
        </button>
        <div class="collapse navbar-collapse justify-content-end marg" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li  class="nav-item">
                    <a id="link"  href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a id="link"  href="section.html">Services</a>
                </li>
                <li class="nav-item">
                    <a id="link"  href="about-us.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a id="link"  href="contact.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <button class="est" data-toggle="modal" data-target="#estimate">
                        Get an Estimate
                    </button>
                </li>
            </ul>
        </div>
      </nav>
  </div>
    `;
  }
}
customElements.define('my-header', myHeader)