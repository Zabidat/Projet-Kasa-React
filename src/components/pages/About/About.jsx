import Banner from "../../Banner/Banner"; 
import imageAboutBanner from "../../../assets/banner/AboutBanner.png"; 
import collapseData from "../../../datas/collapse.json"; 
import Collapse  from "../../Collapse/Collapse";


function About ()
{
    return (
        <div className="about">
           <div className="about_container">
                <Banner Texte="" image={imageAboutBanner} bannerclass="banner-container_imgP"/>
                <div className="about_collapse">
                    {collapseData.map((option) => ( 
                        //l'argument option represente chaque element du tableau collapse qui est objet
                        
                        <Collapse
                            title={option.title}
                            content={option.content} 
                        />

                    ))}
                </div>
           </div>
        </div>
    )
}
export default About 