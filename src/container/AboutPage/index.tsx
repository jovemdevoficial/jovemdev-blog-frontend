import Image from 'next/image';

import { SITE_NAME, SITE_URL, SITE_AUTHORS } from '../../config/api-config';
import { jsonLdAboutPage } from '../../lib/json-ld-about-page';

import { SEO } from '../../infra/components/SEO';
import { Typography } from '../../infra/components/Typography';

import { Footer } from '../../patterns/Footer';
import { Header } from '../../patterns/Header';

import { MainContainer } from '../../components/MainContainer';
import { SideNav } from '../../components/SideNav';
import LightBox from '../../components/LightBox';

import { AboutDescription, InstagramDescription } from './styled';

import aboutImage from '../../assets/svgs/about.svg';
import FacebookImageDefault from '../../assets/images/logo-image-facebook-1200x628.png';
import FacebookImageLarge from '../../assets/images/logo-image-facebook-1000x1000.png';
import FacebookImageSmall from '../../assets/images/logo-image-facebook-500x500.png';
import TwitterImage from '../../assets/images/logo-image-twitter-150x150.png';

export function AboutPage() {
  const jsonLd = jsonLdAboutPage();

  return (
    <>
      <SEO
        title={`Sobre | ${SITE_NAME} Blog`}
        description="Informações do Jovem Dev"
        keywords="Autor, Biografia, Posts"
        site_name={SITE_NAME}
        type="blog"
        authors={SITE_AUTHORS}
        url={`${SITE_URL}/sobre/`}
        image_default={FacebookImageDefault}
        image_large={FacebookImageLarge}
        image_small={FacebookImageSmall}
        image_twitter={TwitterImage}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </SEO>

      <Header />
      <SideNav />

      <LightBox />
      <MainContainer>
        <AboutDescription>
          <div>
            <Typography component="title">Jovem DEV</Typography>
            <Typography component="subtitle1">
              Tetigit ut dixerat, lapidoso si lumina, at cuius: voce. Latiae tui
              palles illo diemque est pectore putria alarum, aut. Ulciscere in
              prior vidisset conspecta vulnere; toto valet adverso petens!
            </Typography>
          </div>
          <img src={aboutImage} alt="Sobre Post" />
        </AboutDescription>
        <AboutDescription>
          <div>
            <h2>Quem Somos</h2>
            <Typography component="subtitle1">
              Tetigit ut dixerat, lapidoso si lumina, at cuius: voce. Latiae tui
              palles illo diemque est pectore putria alarum, aut. Ulciscere in
              prior vidisset conspecta vulnere; toto valet adverso petens!
              Tetigit ut dixerat, lapidoso si lumina, at cuius: voce. Latiae tui
              palles illo diemque est pectore putria alarum, aut. Ulciscere in
              prior vidisset conspecta vulnere; toto valet adverso petens!
            </Typography>
          </div>
        </AboutDescription>
        <InstagramDescription>
          <h2>Insatagram do Jovem Dev</h2>
          <div>
            <Image
              src={FacebookImageSmall}
              alt="Imagem de perfil do instagram do Jovem Dev"
              height={200}
              width={200}
            />
            <Typography component="subtitle1">
              Tetigit ut dixerat, lapidoso si lumina, at cuius: voce. Latiae tui
              palles illo diemque est pectore putria dfffffffff asdladkaskd
              dasdlsakdkasl dsaldkaskdlsa dsaldsakd dsaldk alarum, aut.
              Ulciscere in prior vidisset conspecta vulnere; toto valet adverso
              petens!
            </Typography>
          </div>
        </InstagramDescription>
      </MainContainer>
      <Footer />
    </>
  );
}
