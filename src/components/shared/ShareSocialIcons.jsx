
import { FacebookIcon, EmailIcon, TwitterIcon, FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";


const ShareSocialIcons = ({show}) => {
    const shareUrl = window.location.href;

    return (
        <div className={`share-icons_container ${show ? 'show': ''}`}>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={45} />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={45} />
            </TwitterShareButton>

            <EmailShareButton url={shareUrl}>
                <EmailIcon size={45} bgStyle={{
                    fill: '#FF6666',
                }} />
            </EmailShareButton>
        </div>
    )
}

export default ShareSocialIcons