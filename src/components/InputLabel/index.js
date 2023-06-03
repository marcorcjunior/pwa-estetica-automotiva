import './index.css';

const InputLabel = ({ description, type = "text", value, setValue }) => {

    const handleChange = (event) => setValue(event.target.value);

    return (
        <div className="container custom-input">
            <label className={"margin-not-left"}>
                {description}
            </label>
            <input type={type} value={value} onChange={handleChange} />
        </div>
    );
}

export default InputLabel;