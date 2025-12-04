
import { Certificate } from "./Files/Certificate";
import { TabsDemo } from "./Files/TabsDemo";

export function CertificationSection() {
  
  return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  Featured <span className="text-primary">Certifications </span>
                </h2>                
            </div>
            <div className="flex items-center justify-center mt-4">
              <Certificate />
            </div>
            
            
            
        </section>

  );
}
