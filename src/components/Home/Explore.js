import map from "../../assets/map_world.svg";

const Explore = () => {
    return (
        <section className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#040825"}}>
            <img src={map} style ={{width: 900}} alt="map" />
        </section>
    );
}

export default Explore;