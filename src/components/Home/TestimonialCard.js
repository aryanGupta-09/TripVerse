import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TestimonialCard = (props) => {
    const { testimonial, delay } = props;

    return (
        <motion.div initial={{ opacity: 0, y: 300 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: delay / 9 }}>
            <Card style={{ background: 'linear-gradient(#2B3770 55%, #000000)', width: "350px", height: 250, padding: "10px", paddingTop: "15px", borderRadius: "10%" }}>
                <Card.Body>
                    <Card.Title className="text-white text-center" style={{ fontSize: 30 }}>“</Card.Title>
                    <Card.Text className="text-white text-center">
                        <div style={{ marginTop: -10 }}>
                            {testimonial.description}
                        </div>
                        <div class="d-flex flex-row-reverse" style={{ marginTop: 20 }}>
                            <div class="text-end"><img src={testimonial.image} alt="profile" style={{ marginLeft: 8, width: 55, height: 55, borderRadius: "50%" }} /></div>
                            <div>
                                <div class="text-end" >{testimonial.name}</div>
                                <div class="text-end" style={{ marginTop: 2 }}>{testimonial.status}</div>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default TestimonialCard;