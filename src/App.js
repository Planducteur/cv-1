import logo from "./image.png";
import img from "./1675811696596.png";

import "./styles.css";
import "./grid.less";

import "./App.css";

import React from "react";

import {
  Navbar,
  Nav,
  Container,
  Footer,
  Content,
  FlexboxGrid,
  Divider,
  List,
  Panel,
  Row,
  Col,
  Grid,
} from "rsuite";
import { useState, useEffect, useRef } from "react";

import {
  IoFootball,
  IoAirplane,
  IoMusicalNotesSharp,
  IoDownloadSharp,
} from "react-icons/io5";
import { GiCookingGlove } from "react-icons/gi";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="container hide">
      <div className="swatch cover">
      <FlexboxGrid 
      className="Grid-container"
      justify="center"
      >
        <FlexboxGrid.Item
         className="Grid-item"
          as={Col}
          //colspan={6}
         /* xl={6}
          lg={6}
          md={50}
          sm={40}
          xs={30}*/
          style={{
            background: "rgba(255, 255, 255, 0.5)",
             boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
             backdropFilter: "blur(13.5px)",
             webkitBackdropFilter: "blur(13.5px)",
             border: "1px solid rgba(255, 255, 255, 0.22)",
             borderTopLeftRadius: 15,
             borderBottomLeftRadius: 15,
             padding: "10px",
           }}
         >
           <Divider>
             <h6>Experience</h6>
           </Divider>
           <h6>Développeur web full stack</h6>
           <br />
           <p>
             Développement de l'application en frontend (Reactjs) et backend
             (PHP) Développement de nouvelles fonctionnalités Développement des
             tests unitaires dans le cadre de l'intégration continue Maintenance,
             correction de bugs et amélioration de l'application web.
           </p>
            <Divider></Divider>
           <h6>ERGC - Développeur web </h6>
           <br />
           <p>
             Mise en œuvre des conceptions spécifiques pour le contenu publié
             Développement de nouveau contenu initialement pas prévu sur les CMS
             Contribution au maintien et à l'amélioration continue du site
             officiel
           </p>
         </FlexboxGrid.Item>
         <FlexboxGrid.Item 
         className="Grid-item"
         as={Col} 
         //colspan={10}
         /*</FlexboxGrid>xl={12}
         lg={12}
         md={50}
         sm={40}
         xs={30}*/
         style={{
           backgroundColor: "#d9ddee",
           padding: 40,
         }}
          
         >
           <Navbar appearance="subtle">
             <Navbar.Brand href="/">
               <Container style={{ width: 100 }}>
                 <img src={logo} alt="Logo" />
               </Container>
             </Navbar.Brand>
 
             <Nav style={{ paddingTop: 20, textAlign: "center" }} pullRight>
               <Nav.Item
                 style={{
                   width: 100,
                   height: 40,
                   backgroundColor: "#d9ddee",
                   borderRadius: "15px",
                   textAlign: "center",
                   border: "3px solid #e5e5ea",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                 }}
               >
                 <h5>
                   <IoDownloadSharp style={{ marginRight: "0.5em" }} />
                   CV
                 </h5>
               </Nav.Item>
             </Nav>
           </Navbar>
           <Container
             style={{
               width: 250,
               margin: "auto",
               paddingTop: 20,
               borderRadius: 20,
             }}
           >
             <img
               style={{ border: "3px solid #e5e5ea", borderRadius: 20 }}
               src={img}
               alt="Logo"
             />
           </Container>
 
           <Panel style={{ marginTop: 30 }} bordered>
             <h5>À propos de moi</h5>
             <Divider></Divider>
             <Panel style={{ marginTop: 10 }} bordered>
               <p>
                 Bonjour! Je m'appelle Evi et j'aime construir des solutions pour
                 le web. Mon intérêt pour le développement Web a commencé en 2019
                 lorsque j'ai décidé d'essayer d'éditer un boot pour discord. Il
                 s'avère que le fait de de utiliser nodejs pour le devlopement de
                 ces boot m'a beaucoup appris sur les devlopement des sites web
                 et leur funcionements.
               </p>
             </Panel>
             <br />
             <Row className="show-grid">
               <Col xs={8}>
                 <h6>Âge</h6>
               </Col>
               <Col xs={8}>
                 <h6>Langues</h6>
               </Col>
               <Col xs={8}>
                 <h6>Téléphone</h6>
               </Col>
             </Row>
             <Row className="show-grid">
               <Col xs={8}>25 ans</Col>
               <Col xs={8}>Français, Anglais, Albanais</Col>
               <Col xs={8}>06 95 65 56 21</Col>
             </Row>
             <br />
             <Row className="show-grid">
               <Col xs={8}>
                 <h6>Adresse</h6>
               </Col>
               <Col xs={8}>
                 <h6>Permis</h6>
               </Col>
               <Col xs={8}>
                 <h6>E-mail</h6>
               </Col>
             </Row>
             <Row className="show-grid">
               <Col xs={8}>42 Rue de la Falogne </Col>
               <Col xs={8}>Permis B, véhiculé</Col>
               <Col xs={8}>eviagollli@gmail.com</Col>
             </Row>
           </Panel>
         </FlexboxGrid.Item>
         <FlexboxGrid.Item 
         className="Grid-item"
         as={Col} 
         //colspan={6}
         /*xl={6}
         lg={6}
         md={50}
         sm={40}
         xs={30}*/
         style={{
           background: "rgba(255, 255, 255, 0.5)",
           boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
           backdropFilter: "blur(13.5px)",
           webkitBackdropFilter: "blur(13.5px)",
           border: "1px solid rgba(255, 255, 255, 0.22)",
           borderTopRightRadius: 15,
           borderBottomRightRadius: 15,
           padding: "20px",
         }}
         >
           <Divider>
             <h6>Compétences pratiques</h6>
           </Divider>
           <ul>
             <li>
               Langages et frameworks : Javascript, TypeScript, Bootstrap,
               Matérial-UI, Angular, React, PHP, NodeJS, ExpressJS, SQL
             </li>
             <li>
               Outils de déploiement continu et de tests : GitLab, Git, Postman
             </li>
             <li>CMS : WordPress, Prestashop, Wix</li>
             <li>
               Logiciels de graphisme et conception : Photoshop , Figma, Adobe
               Color
             </li>
             <li>
               Éditeurs et environnements de développement : VsCode, JetBrains,
               XAMPP
             </li>
             <li>
               Outils de conteneurisation et cloud computing : Docker, AWS,
               Microsoft Azure
             </li>
             <li>Méthodologie de gestion de projet</li>
           </ul>
           <Divider>
             <h6>Education</h6>
           </Divider>
           <Panel bordered>
             <h6>ESTIAM - 2019-2022</h6>
             <p>MANAGER DE PROJETS EN INFORMATIQUE</p>
             <Divider></Divider>
             <h6>ESTIAM - 2018-2019</h6>
             <p>ADMINISTRATEUR DES SYSTEMES D'INFORMATION</p>
             <Divider></Divider>
             <h6>La Briquerie - 2016-2018</h6>
             <p>BTS SN-IR</p>
           </Panel>
 
           <Divider>
             <h6>Interests</h6>
           </Divider>
           <Panel bordered>
             <Grid fluid>
               <Row style={{ textAlign: "center" }} className="show-grid">
                 <Col xs={6}>
                   <IoFootball size="2em" />
                 </Col>
                 <Col xs={6}>
                   <IoAirplane size="2em" />
                 </Col>
                 <Col xs={6}>
                   <GiCookingGlove size="2em" />
                 </Col>
                 <Col xs={6}>
                   <IoMusicalNotesSharp size="2em" />
                 </Col>
               </Row>
             </Grid>
           </Panel>
         </FlexboxGrid.Item>
       </FlexboxGrid>
      </div>
    </div>
  );
}

export default App;
