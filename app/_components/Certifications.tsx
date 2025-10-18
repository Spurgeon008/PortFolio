'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                },
            });

            tl.fromTo(
                '.certification-item',
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />

                <div className="grid gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div key={index} className="certification-item">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-background-light rounded-lg border border-border hover:border-primary/30 transition-colors">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-anton leading-tight mb-2">
                                        {cert.title}
                                    </h3>
                                    <p className="text-lg text-muted-foreground mb-1">
                                        {cert.issuer}
                                    </p>
                                    {cert.score && (
                                        <p className="text-primary font-medium">
                                            Score: {cert.score}
                                        </p>
                                    )}
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        {cert.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;