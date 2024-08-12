import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styles/contact.css';

const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function Contact(props) {
    const contactRef = props.contactRef;
    const contactFormRef = useRef();
    const reCAPTCHARef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [reCAPTCHA, setReCAPTCHA] = useState(null);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const sectionRef = contactRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const titleElement = entry.target.querySelector('.contact-title');
                    const contentElement = entry.target.querySelector(".contact-container-mask");

                    // Calculate the ratio and determine the appropriate action
                    if (entry.intersectionRatio >= 0.5) {
                        contentElement.classList.add("slide-to-right");
                    } else if (entry.intersectionRatio < 0.5) {
                        contentElement.classList.remove("slide-to-right");
                    }

                    if (entry.intersectionRatio >= 0.2) {
                        titleElement.classList.add('animated');
                        titleElement.classList.remove('animated-out');
                    } else if (entry.intersectionRatio < 0.2) {
                        titleElement.classList.remove('animated');
                        titleElement.classList.add('animated-out');
                    }
                });
            },
            {
                threshold: [0.2, 0.6]
            }
        );

        if (sectionRef) {
            observer.observe(sectionRef);
        }

        return () => {
            if (sectionRef) {
                observer.unobserve(sectionRef);
            }
        };
    });
    
    const sendEmail = async () => {
        setLoading(true);
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactFormRef.current, { publicKey: PUBLIC_KEY });
            contactFormRef.current.reset();
            setValidated(false);
            reCAPTCHARef.current.reset();
            setReCAPTCHA(null);
            toast.success("Your message has been sent!", { transition: Zoom });
        } catch (error) {
            toast.error(`FAILED... ${error.text}. Please send me a message via email.`, {
                autoClose: 5000,
                pauseOnHover: true,
                pauseOnFocusLoss: true
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        const currentForm = event.currentTarget;
        event.preventDefault();
        if (currentForm.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if (reCAPTCHA) {
                sendEmail();
            } else {
                toast.error("Please verify the reCAPTCHA!");
            }
        }
        setValidated(true);
    };

    return (
        <section ref={contactRef} id="contact" className={`contact ${loading ? "loading-mask" : ""}`}>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                limit={2} 
                pauseOnFocusLoss={false}
                pauseOnHover={false}
            />
            <h2 className="contact-title">Contact<span className="text-dot">.</span></h2>
            <div className="contact-container">
                <div className="contact-container-mask"></div>
                <div className="contact-heading">
                    <h3>Let's talk!</h3>
                    <p>What's on your mind?</p>
                </div>
                <Form 
                    ref={contactFormRef} 
                    noValidate 
                    validated={validated} 
                    className="contact-form" 
                    onSubmit={handleSubmit}
                >
                    {loading && (
                        <i className="fa-solid fa-spinner fa-spin loading-spinner"></i>
                    )}
                    <Row>
                        <Form.Floating className="mb-3" as={Col} lg={6} md={12} sm={12}>
                            <Form.Control
                                required
                                id="nameInput"
                                type="name"
                                name="name"
                                placeholder="Name"
                                autoComplete="name"
                            />
                            <label htmlFor="nameInput"><i className="fa-solid fa-circle-user"></i>Name</label>
                            <Form.Control.Feedback type="invalid">
                                Please provide a name.
                            </Form.Control.Feedback>
                        </Form.Floating>
                        <Form.Floating className="mb-3" as={Col} lg={6} md={12} sm={12}>
                            <Form.Control
                                required
                                id="emailInput"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                autoComplete="email"
                            />
                            <label htmlFor="emailInput"><i className="fa-solid fa-envelope"></i>Email</label>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Floating>
                    </Row>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            required
                            id="subjectInput"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                        />
                        <label htmlFor="subjectInput"><i className="fa-solid fa-pen"></i>Subject</label>
                        <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                        </Form.Control.Feedback>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            required
                            as="textarea"
                            id="messageInput"
                            name="message"
                            placeholder="Message"
                            style={{ height: "200px" }}
                        />
                        <label htmlFor="messageInput"><i className="fa-solid fa-inbox"></i>Message</label>
                        <Form.Control.Feedback type="invalid">
                            Please provide a message.
                        </Form.Control.Feedback>
                    </Form.Floating>
                    <p id="recaptcha-label" className="recaptcha-label">Please verify you are not a robot.</p>
                    <ReCAPTCHA 
                        sitekey={SITE_KEY} 
                        className="mb-4 recaptcha" 
                        aria-describedby="recaptcha-label" 
                        onChange={setReCAPTCHA}
                        ref={reCAPTCHARef}
                    />
                    <button type="submit" className="contact-button"><span>Send Message<i className="fa-solid fa-arrow-up"></i></span></button>
                </Form>
            </div>
        </section>
    );
};