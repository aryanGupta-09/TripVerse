import { motion } from "framer-motion";

import VisitCard from "./VisitCard";
import {locations} from "../../data";

const MostVisited = () => {
    return (
        <section style={{ backgroundColor: "#040825", paddingTop: 100 }}>
            <h1 className="text-white" style={{marginLeft: 70}}>Most Visited</h1>
            <br />
            <motion.div className="d-flex flex-wrap justify-content-around row-gap-5">
                {locations.map((location, index) => (
                    <VisitCard location={location} delay={index} key={index} />
                ))}
            </motion.div>
        </section>
    );
}

export default MostVisited;