import Image_informations from '../../assets/Image_informations.png';
import sectionsData from "../../assets/data/rules.json";
import AccordionSection from '../../components/accordionsection/accordionSection';
import './Info.css';
import Banner from '../../components/Banner/Banner';


function Informations() {
    return (
        <section className="info">
            <Banner image={Image_informations} />
            <div className="rules">
                {sectionsData.map((section, index) => (
                    <AccordionSection
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </div>
        </section>
    );
}

export default Informations;
