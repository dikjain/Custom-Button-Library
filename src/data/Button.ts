import { CursorConfig } from '../types/Button';

export const button: CursorConfig[] = [
  {
    id: 'animated-button-1',
    name: 'Neon Pulse',
    description: 'A button with neon border pulse and text glow effects',
    html: '<button class="animated-button-1"><span>Neon Pulse</span></button>',
    css: `.animated-button-1 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: 2px solid #0ff;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
  box-shadow: 0 0 10px rgba(0,255,255,0.5);
}
.animated-button-1 span {
  position: relative;
  z-index: 1;
  text-shadow: 0 0 8px #0ff;
}
.animated-button-1::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent);
  transition: 0.5s;
}
.animated-button-1:hover::before {
  left: 100%;
}
.animated-button-1:hover {
  box-shadow: 0 0 20px rgba(0,255,255,0.8);
  text-shadow: 0 0 8px #0ff;
  transform: scale(1.05);
}`,
    js: ''
  },
  {
    id: 'animated-button-2', 
    name: 'Liquid Fill',
    description: 'A button with liquid fill and floating particles effect',
    html: '<button class="animated-button-2"><span>Liquid Fill</span></button>',
    css: `.animated-button-2 {
  padding: 15px 30px;
  font-size: 18px;
  color: #ff3399;
  background: transparent;
  border: 2px solid #ff3399;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}
.animated-button-2 span {
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}
.animated-button-2::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #ff3399;
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.animated-button-2::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff3399;
  border-radius: 50%;
  animation: float 3s infinite;
  opacity: 0;
}
.animated-button-2:hover::before {
  height: 100%;
}
.animated-button-2:hover span {
  color: white;
}
.animated-button-2:hover::after {
  opacity: 0.6;
}
@keyframes float {
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(50%, -150%); }
}`,
    js: ''
  },
  {
    id: 'animated-button-3',
    name: 'Glitch Effect',
    description: 'A button with cyberpunk-style glitch effects',
    html: '<button class="animated-button-3"><span>Glitch</span></button>',
    css: `.animated-button-3 {
  padding: 15px 30px;
  font-size: 20px;
  color: #0f0;
  background: #000;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.animated-button-3::before {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  color: #0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-2px, 2px);
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  animation: glitch-top 2s infinite linear alternate-reverse;
}
.animated-button-3::after {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  color: #0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(2px, -2px);
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  animation: glitch-bottom 3s infinite linear alternate-reverse;
}
@keyframes glitch-top {
  0% { transform: translate(-2px, 2px); }
  50% { transform: translate(2px, -2px); }
  100% { transform: translate(-2px, 2px); }
}
@keyframes glitch-bottom {
  0% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, 2px); }
  100% { transform: translate(2px, -2px); }
}`,
    js: ''
  },
  {
    id: 'animated-button-4',
    name: 'Magnetic Field',
    description: 'A button with magnetic pull and particle effects',
    html: '<button class="animated-button-4">Magnetic</button>',
    css: `.animated-button-4 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #6a11cb;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
}
.animated-button-4:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(106, 17, 203, 0.5);
}
.animated-button-4::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #6a11cb;
  border-radius: 60px;
  animation: pulse 1.5s infinite;
  opacity: 0;
}
.animated-button-4::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #6a11cb, transparent);
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s;
}
.animated-button-4:hover::after {
  opacity: 0.3;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1.2); opacity: 0; }
}`,
    js: ''
  },
  {
    id: 'animated-button-5',
    name: 'Holographic',
    description: 'A button with holographic rainbow effects',
    html: '<button class="animated-button-5">Holographic</button>',
    css: `.animated-button-5 {
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #9c27b0);
  background-size: 300% 300%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: gradient 5s ease infinite;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.animated-button-5::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: translateX(-100%);
  transition: 0.5s;
}
.animated-button-5:hover::before {
  transform: translateX(100%);
}
.animated-button-5:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    js: ''
  },
  {
    id: 'animated-button-6',
    name: 'Cosmic Burst',
    description: 'A button with cosmic explosion and particle effects',
    html: '<button class="animated-button-6">Cosmic</button>',
    css: `.animated-button-6 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #000;
  border: 2px solid #fff;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.animated-button-6::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #ff0080, #7928ca, #ff0080);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s;
  z-index: -1;
}
.animated-button-6:hover::before {
  transform: translate(-50%, -50%) scale(2);
}
.animated-button-6::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: cosmic 2s infinite;
  opacity: 0;
}
.animated-button-6:hover::after {
  opacity: 1;
}
@keyframes cosmic {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(100px, -100px) scale(0); }
}`,
    js: ''
  },
  {
    id: 'animated-button-7',
    name: 'Digital Wave',
    description: 'A button with digital wave and glitch effects',
    html: '<button class="animated-button-7">Digital</button>',
    css: `.animated-button-7 {
  padding: 15px 30px;
  font-size: 18px;
  color: #00ff00;
  background: #111;
  border: 2px solid #00ff00;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
}
.animated-button-7::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  animation: wave 2s infinite linear;
}
.animated-button-7:hover {
  background: rgba(0, 255, 0, 0.1);
  text-shadow: 0 0 5px #00ff00;
  animation: glitch 0.3s infinite;
}
@keyframes wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}`,
    js: ''
  },
  {
    id: 'animated-button-8',
    name: 'Elemental Morph',
    description: 'A button with morphing elemental effects',
    html: '<button class="animated-button-8">Elemental</button>',
    css: `.animated-button-8 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(45deg, #ff4d4d, #ff9900, #33cc33, #3399ff);
  background-size: 300% 300%;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  animation: elementalShift 8s infinite;
}
.animated-button-8::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff4d4d, #ff9900, #33cc33, #3399ff);
  background-size: 300% 300%;
  border-radius: 17px;
  z-index: -1;
  animation: elementalShift 8s infinite reverse;
  filter: blur(10px);
}
.animated-button-8:hover {
  transform: scale(1.05);
  animation-play-state: paused;
}
.animated-button-8:hover::before {
  animation-play-state: paused;
}
@keyframes elementalShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    js: ''
  },
  {
    id: 'animated-button-9',
    name: 'Quantum Ripple',
    description: 'A button with quantum ripple and particle effects',
    html: '<button class="animated-button-9">Quantum</button>',
    css: `.animated-button-9 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #1a1a1a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}
.animated-button-9::before,
.animated-button-9::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: ripple 2s infinite;
}
.animated-button-9::after {
  animation-delay: 0.5s;
}
.animated-button-9:hover {
  background: #333;
  animation: pulse 1s infinite;
}
@keyframes ripple {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,
    js: ''
  },
  {
    id: 'animated-button-10',
    name: 'Nebula Swirl',
    description: 'A button with nebula swirl and stardust effects',
    html: '<button class="animated-button-10">Nebula</button>',
    css: `.animated-button-10 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(135deg, #5b247a, #1bcedf);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(91,36,122,0.4);
}
.animated-button-10::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.2));
  animation: nebula 4s infinite;
}
.animated-button-10::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  border-radius: 50%;
  animation: stardust 2s infinite;
}
.animated-button-10:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(91,36,122,0.6);
}
@keyframes nebula {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.5); }
}
@keyframes stardust {
  0% { transform: translate(0, 0); opacity: 1; }
  100% { transform: translate(100px, -100px); opacity: 0; }
}`,
    js: ''
  },
  {
    id: 'animated-button-11',
    name: 'Hexagon Pulse',
    description: 'A hexagon-shaped button with neon pulse effects',
    html: '<button class="animated-button-11">Hexagon</button>',
    css: `.animated-button-11 {
  padding: 15px 30px;
  font-size: 18px;
  color: #00ffff;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: rgba(0, 255, 255, 0.1);
  transition: all 0.3s;
}
.animated-button-11::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 255, 255, 0.2);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  animation: hexPulse 2s infinite;
  z-index: -1;
}
.animated-button-11:hover {
  color: #fff;
  text-shadow: 0 0 10px #00ffff;
  transform: scale(1.1);
}
@keyframes hexPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 1; }
}`,
    js: ''
  },
  {
    id: 'animated-button-13',
    name: 'Plasma Wave',
    description: 'A button with dynamic plasma wave animation',
    html: '<button class="animated-button-13"><span>Plasma</span></button>',
    css: `.animated-button-13 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255,0,255,0.5);
}
.animated-button-13::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    #ff00ff,
    #00ffff,
    transparent
  );
  animation: plasmaRotate 4s linear infinite;
}
.animated-button-13::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: #000;
  border-radius: 12px;
  z-index: 1;
}
.animated-button-13 span {
  position: relative;
  z-index: 2;
}

@keyframes plasmaRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    js: ''
  },
  {
    id: 'animated-button-15', 
    name: 'Sliding Panel',
    description: 'A button with sliding color panel effect',
    html: '<button class="animated-button-15"><div><span><p>Slide Up</p></span></div><div><span><p>Done!</p></span></div></button>',
    css: `.animated-button-15 {
  outline: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 140px;
  height: 50px;
  border-radius: 0.5em;
  box-shadow: 0 0.625em 1em 0 rgba(30, 143, 255, 0.35);
  overflow: hidden;
}

.animated-button-15 div {
  transform: translateY(0px);
  width: 100%;
}

.animated-button-15,
.animated-button-15 div {
  transition: 0.6s cubic-bezier(.16,1,.3,1);
}

.animated-button-15 div span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0.75em 1.125em;
}

.animated-button-15 div:nth-child(1) {
  background-color: #1e90ff;
}

.animated-button-15 div:nth-child(2) {
  background-color: #21dc62;
}

.animated-button-15:hover {
  box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
}

.animated-button-15:hover div {
  transform: translateY(-50px);
}

.animated-button-15 p {
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
}

.animated-button-15:active {
  transform: scale(0.95);
}`,
    js: ''
  },
  {
    id: 'animated-button-16',
    name: 'Dark Slide',
    description: 'A button with sliding dark background effect',
    html: '<button class="animated-button-16">Dark Slide</button>',
    css: `.animated-button-16 {
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  transition: all 250ms;
  overflow: hidden;
}

.animated-button-16::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  transition: all 250ms;
}

.animated-button-16:hover {
  color: #e8e8e8;
}

.animated-button-16:hover::before {
  width: 100%;
}`,
    js: ''
  },
  {
    id: 'animated-button-17',
    name: 'Shine Effect',
    description: 'A button with moving shine effect on hover',
    html: '<button class="animated-button-17">Shine<span></span></button>',
    css: `.animated-button-17 {
  border: none;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: royalblue;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
}

.animated-button-17 span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 4px solid royalblue;
}

.animated-button-17 span::before {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  height: 500%;
  background: var(--lightgray);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  transition: all 0.3s;
}

.animated-button-17:hover span::before {
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 100%;
  background: royalblue;
}

.animated-button-17:hover {
  color: white;
}

.animated-button-17:active span::before {
  background: #2751cd;
}`,
    js: ''
  },
  {
    id: 'animated-button-20',
    name: 'Glitch Effect - 2',
    description: 'A button with cyberpunk-style glitch effect on hover',
    html: '<button class="animated-button-20"><span>GLITCH</span></button>',
    css: `.animated-button-20 {
  padding: 15px 30px;
  font-size: 18px;
  color: #00ff00;
  background: #000;
  border: 2px solid #00ff00;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: 2px;
}

.animated-button-20::before {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  color: #0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-100%, 0);
  transition: none;
  z-index: 2;
}

.animated-button-20:hover::before {
  transform: translate(0, 0);
  animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
}

.animated-button-20 span {
  position: relative;
  z-index: 1;
}

.animated-button-20:hover span {
  animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
  to {
    transform: translate(0);
  }
}`,
    js: ''
  },
  {
    id: 'animated-button-21',
    name: 'Liquid Fill',
    description: 'A button that fills with liquid on hover',
    html: '<button class="animated-button-21">Liquid<div class="liquid"></div></button>',
    css: `.animated-button-21 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: 2px solid #4fc3dc;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.animated-button-21 {
  position: relative;
  z-index: 1;
}

.animated-button-21 .liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #4fc3dc;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
  transition: 0.5s;
  z-index: -1;
}

.animated-button-21 .liquid::before,
.animated-button-21 .liquid::after {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
}

.animated-button-21 .liquid::before {
  border-radius: 45%;
  background: rgba(79, 195, 220, 1);
  animation: animate 5s linear infinite;
}

.animated-button-21 .liquid::after {
  border-radius: 40%;
  background: rgba(79, 195, 220, .5);
  animation: animate 10s linear infinite;
}

.animated-button-21:hover .liquid {
  top: -120px;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}`,
    js: ''
  },
  {
    id: 'animated-button-22',
    name: 'Neon Pulse',
    description: 'A cyberpunk-style button with neon glow and pulse effects',
    html: '<button class="animated-button-22"><span>ACTIVATE</span><div class="neon-border"></div></button>',
    css: `.animated-button-22 {
  position: relative;
  padding: 20px 40px;
  background: #000;
  border: none;
  cursor: pointer;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
}

.animated-button-22 span {
  position: relative;
  color: #0ff;
  z-index: 1;
  text-shadow: 0 0 10px #0ff,
               0 0 20px #0ff,
               0 0 40px #0ff;
  transition: all 0.3s ease;
}

.animated-button-22 .neon-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid #0ff;
  box-shadow: 0 0 15px #0ff,
              inset 0 0 15px #0ff;
  animation: neonPulse 1.5s infinite;
}

.animated-button-22:hover span {
  color: #fff;
  text-shadow: 0 0 10px #fff,
               0 0 20px #fff,
               0 0 40px #0ff;
}

.animated-button-22:hover .neon-border {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 30px #0ff,
              inset 0 0 30px #0ff;
}

.animated-button-22:active {
  transform: scale(0.95);
}

.animated-button-22:active .neon-border {
  border-color: #ff0;
  box-shadow: 0 0 30px #ff0,
              inset 0 0 30px #ff0;
}

.animated-button-22:active span {
  color: #ff0;
  text-shadow: 0 0 10px #ff0,
               0 0 20px #ff0,
               0 0 40px #ff0;
}

@keyframes neonPulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`,
    js: ''
  }
  ,{
    id: 'animated-button-24',
    name: 'Morphing Icon',
    description: 'Button that morphs into a checkmark icon with liquid animation',
    html: '<button class="animated-button-24"><span class="text">Submit</span><span class="icon">✓</span></button>',
    css: `.animated-button-24 {
  position: relative;
  width: 180px;
  height: 60px;
  background: #8A2BE2;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button-24 .text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button-24 .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  font-size: 30px;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button-24:hover {
  width: 60px;
  background: #32CD32;
  animation: pulse-green 1.5s infinite;
}

.animated-button-24:hover .text {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

.animated-button-24:hover .icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.animated-button-24:active {
  transform: scale(0.95);
  filter: brightness(0.9);
}

.animated-button-24::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.6s ease;
}

.animated-button-24:hover::before {
  width: 200px;
  height: 200px;
  opacity: 0;
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(50, 205, 50, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(50, 205, 50, 0);
  }
}`,
    js: ''
  },
  {
    id: 'animated-button-25',
    name: 'Neon Border',
    description: 'A button with animated neon border effect',
    html: '<button class="animated-button-25">Neon</button>',
    css: `.animated-button-25 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
    transition: all 0.3s;
}

.animated-button-25::before,
.animated-button-25::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid #ff00ff;
  box-shadow: 0 0 15px #ff00ff;
  animation: neonBorder 1.5s linear infinite;

}

.animated-button-25:hover {
  background: #fff;
  opacity: 0.8;
  color: #ff00ff;
}

.animated-button-25::after {
  animation-delay: 0.75s;
}

@keyframes neonBorder {
  0% { clip-path: inset(0 0 98% 0); }
  25% { clip-path: inset(0 98% 0 0); }
  50% { clip-path: inset(98% 0 0 0); }
  75% { clip-path: inset(0 0 0 98%); }
  100% { clip-path: inset(0 0 98% 0); }
}`,
    js: ''
  },
  {
    id: 'animated-button-27',
    name: 'Split Text',
    description: 'A button that splits text on hover',
    html: '<button class="animated-button-27" data-text="Split">Split</button>',
    css: `.animated-button-27 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #333;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.animated-button-27:hover {
  letter-spacing: 5px;
}

.animated-button-27::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  transition: all 0.3s;
}

.animated-button-27:hover::before {
  transform: translateX(-5px);
}`,
    js: ''
  },
  {
    id: 'animated-button-29',
    name: 'Magnetic Pull',
    description: 'A button with magnetic pull effect towards cursor',
    html: '<button class="animated-button-29">Magnetic</button>',
    css: `.animated-button-29 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s;
}

.animated-button-29:hover {
  transform: scale(1.1);
}`,
    js: `document.querySelector('.animated-button-29').addEventListener('mousemove', (e) => {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  
  btn.style.transform = \`translate(\${deltaX * 10}px, \${deltaY * 10}px)\`;
});

document.querySelector('.animated-button-29').addEventListener('mouseleave', (e) => {
  e.currentTarget.style.transform = 'translate(0, 0)';
});`
  }
,
  {
    id: 'animated-button-30',
    name: 'Ripple Effect',
    description: 'A button with a ripple effect on click',
    html: '<button class="animated-button-30">Ripple</button>',
    css: `.animated-button-30 {
  position: relative;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
}

.animated-button-30::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
}

.animated-button-30:active::after {
  width: 200px;
  height: 200px;
}`,
    js: `document.querySelector('.animated-button-30').addEventListener('click', (e) => {
  const ripple = e.currentTarget.querySelector('::after');
  ripple.style.width = '200px';
  ripple.style.height = '200px';
  setTimeout(() => {
    ripple.style.width = '0';
    ripple.style.height = '0';
  }, 400);
});`
  },
  {
    id: 'animated-button-32',
    name: 'Shake Effect',
    description: 'A button with a shaking effect on click',
    html: '<button class="animated-button-32">Shake</button>',
    css: `.animated-button-32 {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #dc3545;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.1s;
}

.animated-button-32.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`,
    js: `document.querySelector('.animated-button-32').addEventListener('click', (e) => {
  const btn = e.currentTarget;
  btn.classList.add('shake');
  setTimeout(() => {
    btn.classList.remove('shake');
  }, 500);
});`
  },
  {
    id: 'animated-button-33',
    name: 'Gooey Button',
    description: 'A button with a gooey effect on hover',
    html: `<button class="animated-button-33">Gooey Button</button>
<svg width="0" height="0" style="position: absolute;">
  <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
    <feComponentTransfer>
      <feFuncA type="discrete" tableValues="0 1"></feFuncA>
    </feComponentTransfer>
    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
    <feComponentTransfer>
      <feFuncA type="table" tableValues="-5 11"></feFuncA>
    </feComponentTransfer>
  </filter>
</svg>`,
    css: `.animated-button-33 {
    --a: 0%;
    --hue: 170deg;
    --x: 50;
    --y: 50;
    --button: hsl(var(--hue), 66%, 66%);
    --edge: 20px;
    --size: 2em;
    
    background: transparent;
    color: hsla(var(--hue), 80%, 30%, 0.7);
    font-size: 1.8em;
    position: relative;
    padding: calc(var(--size)) calc(var(--size)*1.5);
    animation: gooey-color 20s linear infinite both;
    transition: 
        --a .5s ease-in-out, 
        transform 1.66s linear;
    transform: scale(0.92);
    isolation: isolate;
}

.animated-button-33:hover {
    --a: 100%;
    transition-duration: .5s, 1s;
    box-shadow: none;
    opacity: 1;
    transform: scale(1);
}

.animated-button-33:before {
    content: "";
    position: absolute;
    inset: 0;
    filter: blur(12px) url(#goo) drop-shadow(0 .25em .5em hsla(0deg, 0%, 0%, 0.8)); 
    background-image:
        linear-gradient(0deg,var(--button),var(--button)),
        radial-gradient(
            40% 70% at calc(var(--x) * 1%) calc(var(--y) * 1%),
            hsla(var(--hue), 77%, 77%, var(--a)) 0%,
            transparent 90%
        );
    background-clip: content-box, border-box;
    padding: 24px;
    z-index: -1;
    border: inherit;
    animation: gooey-color 20s linear infinite both;
}

@property --hue {
    syntax: "<angle>";
    initial-value: 170deg;
    inherits: false;
}

@property --a {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: true;
}

@keyframes gooey-color {
    from {
        --hue: 170deg;
    }
    to {
        --hue: 530deg;
    }
}`,
    js: `window.addEventListener('load', () => {
  const button = document.querySelector('.animated-button-33');
  let animationInterval;

  function startIntroAnimation() {
    let i = 4;
    button.style.setProperty("--a", '100%');
    
    animationInterval = setInterval(() => {
      button.style.setProperty("--x", ((Math.cos(i) + 2) / 3.6 * 100).toString());
      button.style.setProperty("--y", ((Math.sin(i) + 2) / 3.6 * 100).toString());
      
      i += 0.03;
      if (i > 11.5) {
        clearInterval(animationInterval);
        button.style.setProperty("--a", '0%');
      }
    }, 16);
  }

  button.addEventListener('pointermove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    button.style.setProperty('--x', ((e.clientX - rect.x) / rect.width * 100).toString());
    button.style.setProperty('--y', ((e.clientY - rect.y) / rect.height * 100).toString());
  });

  startIntroAnimation();

  button.addEventListener('pointerover', () => {
    clearInterval(animationInterval);
    button.style.setProperty("--a", '100%');
  });

  button.addEventListener('pointerleave', () => {
    button.style.setProperty("--a", '0%');
  });
});`
  }
];
