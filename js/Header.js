import logo from "../images/logo.png";
const Header = function render() {
    const locationHash = window.location.hash;
    return `<div class="container">
    <a href="#/" class="logo">
        <img src="${logo}">
    </a>
    <button class="burger is-active">
        <div ></div>
        <div ></div>
        <div ></div>
    </button>
    <nav class="main-nav is-active">
        <ul class=" navbar-item ">
        <li>
        <a class="${(locationHash === "#/about-us") ? 'navbar-item active' : 'navbar-item'}" href="#/about-us">About Us</a>
    </li>
    <li>
        <a class="${(locationHash === "#/how-to-adopt") ? 'navbar-item active' : 'navbar-item'}" href="#/how-to-adopt">How to Adopt</a>
    </li>
    <li>
        <a class="${(locationHash === "#/stories") ? 'navbar-item active' : 'navbar-item'} " href="#/stories">Stories</a>
    </li>
    <li>
        <a class="${(locationHash === "#/contact") ? 'navbar-item active' : 'navbar-item'} " href="#/contact">Contact</a>
    </li>
        </ul>
    </nav>
</div>`;
}
export default Header;