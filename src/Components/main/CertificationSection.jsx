import { Certificate } from "../Files/Certificate";

export function CertificationSection() {
  return (
    <div className="mainContainer">
      <div className="insideContainer">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured <span className="text-primary">Certifications </span>
        </h2>

        <div className="rowFlex mt-4">
          <Certificate />
        </div>
      </div>
    </div>
  );
}
