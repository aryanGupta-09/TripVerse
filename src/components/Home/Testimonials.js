import { motion } from "framer-motion";

import { testimonials } from "../../data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#040825" }}>
            <div style={{

                width: "85%",
                backgroundColor: "#111B4C",
                borderRadius: 10,
                padding: 30,
                borderWidth: 10,
                borderColor: "#FFFFFF"

            }}>

                <p className="text-white" style={{ marginLeft: 30, fontSize: 20 }}>WHAT OTHERS SAY</p>
                <h1 className="text-white" style={{ marginLeft: 30 }}>Testimonials</h1>

                <br />
                <motion.div className="d-flex align-items-center justify-content-around flex-wrap row-gap-3 " style={{ marginBottom: 10 }}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard testimonial={testimonial} delay={index} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;