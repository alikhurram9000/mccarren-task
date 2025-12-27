import './Footer.styles.css'
import { FOOTER_TEXT } from '../../utils/constants'

const Footer = () => {
    return (
        <footer className='foot'>
            <small>
                {FOOTER_TEXT.tip}
            </small>
        </footer>
    )
}

export { Footer }