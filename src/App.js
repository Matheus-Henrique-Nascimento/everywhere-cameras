import './reset.css';
import './App.css';

/* --- Components --- */

import Navbar from './components/navbar/Navbar';
import TextSection from './components/textSection/TextSection';
import InfoSection from './components/infoSection/InfoSection';
import SwiperCarousel from './components/swiperCarousel/SwiperCarousel';
import VideoSection from './components/videoSection/VideoSection';
import Footer from './components/footer/Footer';

/* --- Graphic Content --- */

import Camera from './imagesAndVideos/images/illustrations/Camera.png';
import Pictures from './imagesAndVideos/images/illustrations/Pictures.png';
import Computer from './imagesAndVideos/images/illustrations/Computer.png';
import Suitcase from './imagesAndVideos/images/illustrations/Suitcase.png';

import BrillantV6 from './imagesAndVideos/images/photos/BrillantV6.jpg';
import LeicaM6 from './imagesAndVideos/images/photos/LeicaM6.jpg';
import PentaxME from './imagesAndVideos/images/photos/PentaxME.jpg';

import CarbonFiberTripod from './imagesAndVideos/images/photos/CarbonFiberTripod.jpg';
import CameraBag from './imagesAndVideos/images/photos/CameraBag.jpg';
import Helios44 from './imagesAndVideos/images/photos/Helios44.gif';

import KodakEktachromeE100 from './imagesAndVideos/images/photos/KodakEktachromeE100.jpg';
import Portra800 from './imagesAndVideos/images/photos/Portra800.jpg';
import Portra400 from './imagesAndVideos/images/photos/Portra400.jpg';

import FirstVideo from './imagesAndVideos/videos/FirstVideo.webm';
import SecondVideo from './imagesAndVideos/videos/SecondVideo.mp4';
import ThirdVideo from './imagesAndVideos/videos/ThirdVideo.webm';
import FourthVideo from './imagesAndVideos/videos/FourthVideo.webm';

/* --- Application --- */

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextSection firstPhoto={Camera} secondPhoto={Pictures} title='Aqui você encontrará as melhores câmeras digitais ou a filme disponíveis no mercado.' paragraph='Selecionamos o que de melhor há na industria da fotografia e do filme. Dialogando com especialistas, chegamos a uma seleção incrível de câmeras, acessórios e filmes... tudo disponível para você em preço competitivo. Confira tudo o que temos a disposição!' />
      <VideoSection ulr={FirstVideo}/>
      <SwiperCarousel id='cameras' title='Nossas Câmeras:' cardTitle={['Brillant V6', 'Leica M6', 'Pentax ME']} cardParagraph={['Duscubra o mundo pela mais alemã das câmeras.', 'A melhor das câmeras alemãs de 35mm.', 'A mais queridinha das 35mm japonesas.']} cardimage={[BrillantV6, LeicaM6, PentaxME]} cardAlt={['Imagem de uma câmera Bolex H16.', 'Imagem de uma câmera Leica M6.', 'Imagem de uma câmera Pentax ME.']} />
      <VideoSection ulr={SecondVideo}/>
      <SwiperCarousel id='equipaments' title='Nossos Equipamentos:' cardTitle={['Tripé de fibra de carbono', 'Câmera impermeável', 'Helios 44-2']} cardParagraph={['O melhor tripé do mercado feito em carbono.', 'Uma mochila perfeita para todas e quaisquer situações.', 'Uma lente antiga que voltou e voltou com tudo.']} cardimage={[CarbonFiberTripod, CameraBag, Helios44]} cardAlt={['Imagem de um tripé de carbono.', 'Imagem de um mochila impermeável.', 'Imagem de um lente Helios 44-2.']} />
      <VideoSection ulr={ThirdVideo}/>
      <SwiperCarousel id='stockFilms' title='Nossos Filmes Fotográficos:' cardTitle={['Kodak Ektachrome E100', 'Portra 800', 'Portra 400']} cardParagraph={['O Kodak Professional Ektachrome E100 é um filme 120 positivo colorido com equilíbrio de luz do dia.', 'O Kodak Portra 800 é uma versão do Kodak Portra 400 para ambientes menos iluminados.', 'O Kodak Portra 400 é um filme negativo 35mm: oferece uma paleta de cor suave e natural.']} cardimage={[KodakEktachromeE100, Portra800, Portra400]} cardAlt={['Uma imagem de um iceberg feito em Kodak Ektachrome E100.', 'Uma imagem noturna e urbana feita em Kodak Portra 800.', 'Uma imagem de um costa marítima feita em Kodak Portra 400.']} />
      <VideoSection ulr={FourthVideo}/>
      <InfoSection firstPhoto={Computer} secondPhoto={Suitcase} title='Nós somos apaixonados por fotografia e vemos o mundo pelo prisma de lentes de vidro.' firstParagraph='Nos tornamos a maior distribuidora de equipamentos fotográficos do Brasil e importamos equipamentos do mundo inteiro: não há falta de estoque para nós.' secondParagraph='Fique à vontade para dar uma olhada em todos os nossos produtos.' thirdParagraph='Somos uma distribuidora puramente digital, não temos lugar físico: caso que nos contatar, fiquei à vontade para enviar-nos um email — também temos um número de telefone!' firstInfo='everywhere.cameras@gmail.com.br' secondInfo='(011) - 9-0000-0000' />
      <Footer />
    </div>
  );
}

export default App;