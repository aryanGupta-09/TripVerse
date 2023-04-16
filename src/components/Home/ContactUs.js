import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ContactUs = () => {
    return (
        <section className="d-flex flex-column vh-100  justify-content-center" style={{ backgroundColor: "#040825" ,padding: "20%", marginTop:-100}}>

            <p className="text-white" style={{ marginLeft: 30, fontSize: 15 }}>GET IN TOUCH</p>
            <h1 className="text-white" style={{ marginLeft: 30, marginTop: -20 }}>Contact Us</h1>

            <div className="d-flex align-items-center justify-content-around">

                <div className="d-flex flex-column">
                    <p style={{color: "#FFFFFF" , fontSize: 20}}>&#9743;    +91 12098937829</p>
                    <p style={{color: "#FFFFFF", fontSize: 20}}>&#9993;    admin@tripverse.com</p> 

                </div>

                <Form style={{width: 400}}>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white">Message</Form.Label>
                        <FloatingLabel label="Type your message here...">
                            <Form.Control as="textarea" placeholder="Type your message here..." style={{ height: '150px' }} />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='text-center' style={{backgroundColor:'#7575B1'}}>Submit</Button>
                </Form>
            </div>

        </section>
    );
}

export default ContactUs;