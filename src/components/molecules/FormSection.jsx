import Input from "../Atoms/Input";

export default function FormSection({type, label, placeholder, onChange}){
    return(
        <div className="form-section">
            <p>{label}</p>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}