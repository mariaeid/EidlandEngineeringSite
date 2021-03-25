import React, { Component } from "react";

import Hero from "../../components/Hero";
import TextBox from "../../components/TextBox";
import TextBoxHeader from "../../components/TextBoxHeader";
import SectionSplitLeft from "../../components/SectionSplitLeft";
import SectionSplitRight from "../../components/SectionSplitRight";
import Projects from "../../components/Projects";
import Values from "../../components/Values";
import Footer from "../../components/Footer";

class Home extends Component {

  render() {
    return (
      <div>
        <Hero />
        <div id="main"></div>
        <TextBoxHeader
          title="En glad konsult är en bra konsult"
          description="Vi är konsultbolaget som tror att man ska ha kul för att göra ett bra jobb. Brinner för programmering och bla bla. Tror på lojalitet och nära kommunikation"
        />
        <SectionSplitLeft />
        <TextBox
          title="Våra kompetensområden"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id pellentesque velit, quis bibendum lorem. Suspendisse porta sit amet quam sit amet dictum. Vivamus a suscipit diam. Morbi non turpis nec ipsum sollicitudin imperdiet eu nec ligula. Fusce in egestas magna. Morbi iaculis dui vel felis ultricies, quis pretium dui rhoncus. Duis eget eros tincidunt, pretium risus a, semper lorem. Suspendisse ultricies diam id turpis finibus"
        />
        <Projects />
        <SectionSplitRight />
        <TextBox
          title="Vad som är viktigt för oss"
          description="Duis auctor, nisi quis egestas congue, diam sem faucibus dolor, nec euismod neque urna eget urna. Nulla placerat est fringilla, finibus urna eu, vulputate sapien. Quisque sed rhoncus orci, sit amet mollis arcu. Aliquam eu egestas nunc, sed blandit erat. Suspendisse porta, ante non tristique pellentesque, odio tellus suscipit sapien, sit amet pretium dolor velit vitae mauris. Mauris sed dapibus enim. Nullam porttitor vulputate nisl, non fermentum nulla mollis in."
        />
        <Values />
        <TextBox
          title="Kontakta oss"
          description="Låter det intressant? Kontakta oss på mail michael@eidland.se eller telefon 0729 707 151."
        />
        <SectionSplitLeft />
        <Footer title="Följ oss på sociala medier" upText="Till toppen" />
      </div>
    );
  }
}

export default Home;



