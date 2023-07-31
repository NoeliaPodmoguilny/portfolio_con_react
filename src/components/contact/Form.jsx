import { useForm, ValidationError } from '@formspree/react';
import { Message } from './Message'; 

export const Form = () => {

    const [state, handleSubmit] = useForm("mnqyyqne");
        
    if (state.succeeded) return <Message/>

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group ">
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="form-control m-1 input-form"
                    placeholder="Email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="form-group">
                <textarea
                    id="message"
                    name="message"
                    className="form-control m-1 input-form"
                    rows={'5'}
                    placeholder="Message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className="form-group">
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="form-control m-1 btnCV borderNone"
                >
                Submit
                </button>
            </div>
        </form>
    )
}
