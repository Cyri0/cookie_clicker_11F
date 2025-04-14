import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import SneakerInfo from "../components/SneakerInfo";

const SneakerPage = () => {
    return (<>
        <Navbar/>
        <div style={{
            maxWidth: "1000px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
        }}>
            <ImageCarousel/>
            <SneakerInfo/>
        </div>
    </>)
}

export default SneakerPage;