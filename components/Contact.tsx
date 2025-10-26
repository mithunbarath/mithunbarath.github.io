
import React, { useEffect } from 'react';

const Contact = React.forwardRef<HTMLElement>((props, ref) => {

  useEffect(() => {
    let vantaEffect: any = null;
    if ((window as any).VANTA && ref && typeof ref !== 'function' && ref.current) {
      vantaEffect = (window as any).VANTA.BIRDS({
        el: ref.current,
        THREE: (window as any).THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a192f,
        color1: 0x64ffda,
        color2: 0x8892b0,
        quantity: 3.00,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [ref]);

  return (
    <section ref={ref} id="contact" className="page-container contact-bg text-center relative">
      <div className="container mx-auto px-6 max-w-2xl z-10">
        <p className="font-mono text-accent mb-2 animate-fade-in-up">07. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-slate-light mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Get In Touch
        </h2>
        <p className="text-slate leading-relaxed mb-12 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl font-sans font-bold text-slate-light mb-2">Mithun Barath M R</h3>
          <a href="mailto:barathmithun1548@gmail.com" className="font-mono text-accent text-lg hover:underline transition-all duration-300">
            barathmithun1548@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
