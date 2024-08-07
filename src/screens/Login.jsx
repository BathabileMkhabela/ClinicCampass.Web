import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';


    const App =() => {

        const[formInput, setFormInput]=useState({
            
            password:"",
            confirmPassword:"",
            successMsg:"",
        });
        
        const[formError, setFormError]=useState({
            
            password:"",
            confirmPassword:"",
            
        });
        
        const handleUserInput=(name, value) => {
            setFormInput({
                ...formInput,
                [name]:value,
            });
        }
        
        const validateFormInput =(event) => {
            event.preventDefault();
        
            let inputError={
                password:"",
                confirmPassword:"",
            };
            if (!formInput.password )
            {
                setFormError({
                    ...inputError,
                    password:"Password should not be empty",
                   
                });
                return;
            }
            
            function password() {
            //check if password and confirm password match
            if(formInput.confirmPassword !== formInput.password)
            {
                setFormError(
                    {
                        ...inputError,
                        confirmPassword:"Password should match",
                    }
                );
                return;
            }
            //clear any previous errors and show success message
            setFormError(inputError);
            setFormError((prevState) => ({
                ...prevState,
                successMsg:"validation success",
            }));
        }
    }
        return(
            <div className="container">
                <Header />
                    <div className="password">
                    <h4 className="title">Confirm Password</h4>
                
                <div className="card-body">
                    <form onSubmit={validateFormInput}>
        
                        <input
                        value={formInput.password}
                        onChange={({target})=>{handleUserInput(target.name, target.value)}}
                        name="password"
                        type="password"
                        className="input"
                        placeholder="Enter Password"
                        />
                        <p className="error-message">{formError.password}</p>
        
                        {/* Confirm password input*/ }
        
                        <input
                        value={formInput.confirmPassword}
                        onChange={({target})=>{handleUserInput(target.name, target.value)}}
                        name="confirmPassword"
                        type="confirmPassword"
                        className="input"
                        placeholder="Confirm Password"
                        />
                        <p className="error-message">{formError.confirmPassword}</p>
                        <p className="success-message">{formInput.successMsg}</p>
        
                        {/* Submit button */}
                        <button>Submit</button>
                    </form>
                </div>
                </div>
            </div>
        );
        }
        
        export default App;