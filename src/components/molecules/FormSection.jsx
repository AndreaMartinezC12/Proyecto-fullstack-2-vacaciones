import Input from "../atoms/Input";

export default function FormSection({label, type, placeholder, onChange}){
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