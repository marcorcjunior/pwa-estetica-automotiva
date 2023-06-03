const Container = ({ children, style, row = false }) => (
    <div className={`container${row ? '-row' : ''}`} style={style}>
        {children}
    </div>
);

export default Container;