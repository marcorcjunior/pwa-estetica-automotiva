const ListItem = ({ title = "Titulo", description = "Descrição do item" }) => (
    <div className="margin-not-left">
        <div className="container-row">
            <h2>{title}</h2>
        </div>
        <div className="container-row">
            <h3>{description}</h3>
        </div>
    </div>
);

export default ListItem;