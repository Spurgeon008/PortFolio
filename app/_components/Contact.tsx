'use client';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                '.contact-item',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
            );
        },
        { scope: containerRef },
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Validate form fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert('Please fill in all required fields.');
            setIsSubmitting(false);
            return;
        }
        
        // Create mailto link with properly formatted data
        const subject = `Portfolio Contact: Message from ${formData.name}`;
        const body = `Hello John,

I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`;
        
        const mailtoLink = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        try {
            window.open(mailtoLink, '_self');
            
            // Show success message
            alert('Email client opened! Your message has been prepared for sending.');
            
            // Reset form after successful attempt
            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            }, 1500);
        } catch (error) {
            alert('Unable to open email client. Please copy my email address and send manually: ' + GENERAL_INFO.email);
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-background" id="contact" ref={containerRef}>
            <div className="container">
                <SectionTitle
                    title="Get In Touch"
                    className="contact-item"
                />
                
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="contact-item">
                            <h3 className="text-3xl font-anton mb-6">Let's Work Together</h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you have a project in mind, want to discuss potential 
                                collaboration, or just want to say hello, I'd love to hear from you!
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 bg-primary rounded-full flex-shrink-0"></span>
                                    <span className="text-muted-foreground">{GENERAL_INFO.email}</span>
                                </div>
                                
                                <div className="flex gap-4 mt-6">
                                    {SOCIAL_LINKS.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
                                        >
                                            {social.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-item">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                                        placeholder="Tell me about your project or just say hello..."
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        as="button"
                                        type="submit"
                                        variant="primary"
                                        className="w-full sm:w-auto min-w-[200px]"
                                        loading={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;