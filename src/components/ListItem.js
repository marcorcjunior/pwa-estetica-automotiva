const ListItem = ({ title = "Titulo", description = "Descrição do item" }) => (
    <div className="container">
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
);

export default ListItem;