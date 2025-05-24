import './Contact.css';
import {useForm} from "react-hook-form";

// Define the type for form data.
type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {

    // useForm hook from react-hook-form
    // <FormData>  react hook are identify the form data type and provide that type data to the form.
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form submitted successfully:', data);
        alert((`Submitted Your Case : ${data.subject}`))
    }


    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address'
                        }
                    })}/>
                    {errors.email ? <span className="error-message">{errors.email.message}</span> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" {...register('subject', {
                        required: 'Subject is required',
                        pattern: {
                            value: /^[a-zA-Z0-9\s]+$/,
                            message: 'Subject can only contain letters and numbers'
                        }
                    })}/>
                    {errors.subject ? <span className="error-message">{errors.subject.message}</span> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea {...register('message', {
                        required: true,
                    })}>
                    </textarea>
                    {errors.message ? <span className="error-message">Message is required</span> : ''}
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
