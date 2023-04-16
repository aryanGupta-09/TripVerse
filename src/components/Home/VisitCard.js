import { Tilt } from 'react-tilt';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const VisitCard = (props) => {
    const {location, delay} = props;

    return (
        <motion.div initial={{ opacity: 0, y: 300 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: delay/9 }}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="rounded" style={{ backgroundColor: "#1F1F1F" }}>
                <Card style={{ background: 'linear-gradient(#2B3770 55%, #000000)', width: "350px", padding: "10px", paddingTop: "15px" }}>
                    <Card.Img variant="top" src={location.image} alt={location.title} className="rounded" style={{ maxWidth: "100%", height: "270px" }} />
                    <Card.Body>
                        <Card.Title className="text-white text-center">{location.title}</Card.Title>
                        <Card.Text className="text-white text-center">
                            {location.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Tilt>
        </motion.div>
    );
}

export default VisitCard;