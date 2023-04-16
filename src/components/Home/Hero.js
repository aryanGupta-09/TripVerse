import { useState, useEffect } from 'react';
import EarthCanvas from './Earth';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 920px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const styles = {
        para: {
            width: 350,
            margin: 0,
            padding: "10px",
            fontFamily: "Arial",
            color: "#FFFFFF"
        }
    }

    return (
        <section className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#040825" }}>
            <p style={{ marginLeft: isMobile ? "5%" : "15%" }}>
                <h1 style={{ color: "#FFFFFF", fontSize: 70, marginTop: -20, width: 400 }}>Welcome to </h1>
                <h1 style={{ color: "#3B56B7", fontSize: 70, marginTop: -20 }}>TripVerse</h1>
                <p style={styles.para}>Experience the world from the comfort of your own home, exploring breathtaking destinations and cultures through immersive 360-degree tours and curated travel guides.</p>
            </p>
            <EarthCanvas />
        </section>
    );
}

export default Hero;