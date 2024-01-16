'use client'
import { Parallax } from 'react-parallax';
import { parisienne } from '../fonts';
import AniText from './AnimatedTextCharacter';
const ParallaxBanner = () => {
  return (
    <div className="relative">
      <Parallax bgImage="/img/plage2.jpg" strength={500}>
        <div style={{ height: '38vh' }} className={parisienne.className}>
          <div className="flex items-center justify-center h-full text-white text-center z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">Bluff Beach</h1>
          </div>
        </div>
      </Parallax>
     
    </div>
  );
};

export default ParallaxBanner;
