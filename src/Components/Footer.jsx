import '../Assets/CSS/Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Footer() {
	return (
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>company</h4>
						<ul>
							<li><Link to='/about'>about us</Link></li>
							<li><a href="#">our services</a></li>
							<li><a href="#">privacy policy</a></li>
							<li><a href="#">affiliate program</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>get help</h4>
						<ul>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">shipping</a></li>
							<li><a href="#">returns</a></li>
							<li><a href="#">order status</a></li>
							<li><a href="#">payment options</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>online shop</h4>
						<ul>
							<li><a href="#">EBook</a></li>
							<li><a href="#">Book</a></li>
							<li><a href="#">Audio Books</a></li>
							<li><a href="#">Video Books</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>follow us</h4>
						<div class="social-links">
							<a href="https://www.instagram.com/sriram_484/" target='blank'><FaInstagramSquare />
</a>
							<a href="https://www.linkedin.com/in/sriram-r-50ba10248" target='blank'><FaLinkedin />
</a>
							<a href="https://www.youtube.com/@sriramrajkumar2774" target='blank'><FaYoutube />
</a>
							<a href="https://twitter.com/Sriram_484?t=Cw6CS2CUNdiCZkx7Qdl3Zg&s=09" target='blank'><FaSquareXTwitter />
</a>
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}