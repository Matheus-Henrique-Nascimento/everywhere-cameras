import './reset.css';
import './App.css';

/* --- Components --- */

import Navbar from './components/navbar/Navbar';
import TextSection from './components/textSection/TextSection';
import InfoSection from './components/infoSection/InfoSection';
import VideoSection from './components/videoSection/VideoSection';
import Footer from './components/footer/Footer';

/* --- Graphic Content --- */

import Camera from './imagesAndVideos/images/illustrations/Camera.png';
import Pictures from './imagesAndVideos/images/illustrations/Pictures.png';
import Computer from './imagesAndVideos/images/illustrations/Computer.png';
import Suitcase from './imagesAndVideos/images/illustrations/Suitcase.png';

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
      <VideoSection ulr={SecondVideo}/>
      <VideoSection ulr={ThirdVideo}/>
      <VideoSection ulr={FourthVideo}/>
      <InfoSection firstPhoto={Computer} secondPhoto={Suitcase} title='Nós somos apaixonados por fotografia e vemos o mundo pelo prisma de lentes de vidro.' firstParagraph='Nos tornamos a maior distribuidora de equipamentos fotográficos do Brasil e importamos equipamentos do mundo inteiro: não há falta de estoque para nós.' secondParagraph='Fique à vontade para dar uma olhada em todos os nossos produtos.' thirdParagraph='Somos uma distribuidora puramente digital, não temos lugar físico: caso que nos contatar, fiquei à vontade para enviar-nos um email — também temos um número de telefone!' firstInfo='everywhere.cameras@gmail.com.br' secondInfo='(011) - 9-0000-0000' />
      <Footer />
    </div>
  );
}

export default App;