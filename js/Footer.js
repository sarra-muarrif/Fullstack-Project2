import logo from "../images/logo.png";
const Footer = function render(){
    return `<div class="container">
    <div class="copyrights">
        <img src="${logo}" alt="Logo">
        <p>&copy; 2010 — 2020</p>
        <p><a href="#">Privacy</a> — <a href="#">Terms</a></p>
    </div>
    <div class="footer-nav">
        <div class="item">
            <h5>How to Adopt</h5>
            <ul>
                <li><a href="#">find a pet</a></li>
                <li><a href="#">adoption centers</a></li>
                <li><a href="#">adoption events</a></li>
            </ul>
        </div>
        <div class="item">
            <h5>about us</h5>
            <ul>
                <li><a href="#">News</a></li>
                <li><a href="#">careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="item">
            <h5>Stories</h5>
            <ul>
                <li><a href="#">community impact</a></li>
                <li><a href="#">your stories</a></li>
                <li><a href="#">our impact</a></li>
            </ul>
        </div>
        <div class="item">
            <h5>Help us</h5>
            <ul>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Corporate giving</a></li>
            </ul>
        </div>
    </div>
</div>`
}

export default Footer;