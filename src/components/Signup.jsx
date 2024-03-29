import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

const Signup= () => {
    
    const [signupState, setSignupState] = useState(fieldsState);
    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount = async () => {
        const endpoint = `http://127.0.0.1:8999/api/signup`;
        try {
            const response = await fetch(endpoint,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: signupState.firstname,
                        lastname: signupState.firstname,
                        emailaddress: signupState.emailaddress,
                        password: signupState.password
                    })
                })
            if (response.status === 201) {
                const data = await response.json()
                localStorage.setItem('sessionToken', data.authtoken);
                navigate('/posts');
            }
            if (response.status === 401) {
                alert("Username or password is not correct")
            }
            if (response.status > 401) {
                alert("Username or password is not correct")
            }
        } catch (error) {
            alert("Internal server error")
        }

    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    )
}


export default Signup