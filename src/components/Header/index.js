import './index.css';
import Icon from "../Icon";

const Header = ({ title, icon }) => (
    <header className="personHeader">
        <Icon icon={icon} size='64px' alt={title} padding='8px' />
        <h2 style={{ margin: '24px' }}>
            {title}
        </h2>
    </header>
);

export default Header;