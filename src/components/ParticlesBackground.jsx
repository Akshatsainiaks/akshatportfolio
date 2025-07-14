import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React from 'react';
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 60 },
          color: { value: '#00f2fe' },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.3 },
          links: {
            enable: true,
            distance: 120,
            color: '#00f2fe',
            opacity: 0.1,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
