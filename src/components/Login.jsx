import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login =() => {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }
    // const [token, setToken] = useState(localStorage.getItem('sessionToken') || '');
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = async () => {
        const endpoint = `http://127.0.0.1:8999/api/login`;
        try {
            const response = await fetch(endpoint,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: loginState.emailaddress,
                        password: loginState.password
                    })
                })
            if (response.status === 200) {
                const data = await response.json()
                localStorage.setItem('sessionToken', data.authtoken);
                navigate('/users');
            }
            if (response.status === 401) {
                alert("Username or password is not correct")  
                navigate('/');              
            }
            if (response.status > 401) {
                alert("Username or password is not correct")
                navigate('/');
            }            
        } catch (error) {
            alert("Internal server error")
            navigate('/');
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />

        </form>
    )
}


export default Login