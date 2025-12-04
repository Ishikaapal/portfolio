import Particles from "./Background/Particles"

export const ParticleBackground = () => {

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">           
                <Particles
                    particleColors={['#4F46E5', '#64748B', '#0EA5E9','#FFFFFF','#475569','#10B981','#F59E0B']}
                    particleCount={300}
                    particleSpread={25}
                    speed={0.2}
                    particleBaseSize={150}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
           
        </div>)

};