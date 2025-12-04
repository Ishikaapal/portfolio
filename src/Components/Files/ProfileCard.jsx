import { CometCard } from "@/components/ui/comet-card";

export  const ProfileCard = () => {
  return (
    <CometCard>
      <button
        type="button"
        className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-accent p-2 saturate-60 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}>
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[4/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-accent/30 object-cover contrast-85"
              alt="Ishika Pal"
              src="/ishh.png"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }} />
          </div>
        </div>
        <div
          className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs md:text-lg text-background">Ishika Pal</div>
          <div className="text-xs md:text-lg text-background">Front End Developer</div>
        </div>
      </button>
    </CometCard>
  );
}
