const Icon = ({ icon, size = '36px', padding = '8px', alt = 'icon' }) => (
    <span className="material-symbols-outlined" alt={alt} style={{ fontSize: size, padding }}>
        {icon}
    </span>
);

export default Icon;