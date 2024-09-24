import SocialMedia from './constants/SocialMediaIcons';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="social-media-container">
                <SocialMedia instagramGradient="instagram-gradient-2" />
            </div>
            <div className="copyright-container">
			    <p className="copyright mb-0">&copy; 2024 Minh Mai. Made with lots of<span>&#x2615;</span></p>
            </div>
        </footer>
    )
}