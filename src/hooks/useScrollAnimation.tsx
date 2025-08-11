import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

export const ScrollAnimationWrapper = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};