"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Background Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card Section */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50 px-4">
            {/* Mobile Close Button */}
            <motion.button
              key={`close-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 lg:hidden bg-white shadow-lg rounded-full h-8 w-8 flex items-center justify-center"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xl max-h-[90vh] flex flex-col"
            >
              {/* Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-72 object-cover object-top"
                />
              </motion.div>

              {/* Content */}
              <div className="p-5 overflow-y-auto">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-semibold text-neutral-900 dark:text-neutral-200 text-lg"
                >
                  {active.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-sm mt-1"
                >
                  {active.description}
                </motion.p>

                <motion.a
                  layout
                  href={active.ctaLink}
                  target="_blank"
                  className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full font-medium text-sm"
                >
                  {active.ctaText}
                </motion.a>

                {/* Long Text Content */}
                <motion.div
                  layout
                  className="mt-4 text-neutral-700 dark:text-neutral-400 text-sm space-y-4"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid of Cards */}
      <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl cursor-pointer shadow-sm"
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                src={card.src}
                alt={card.title}
                className="rounded-lg w-full h-52 object-cover object-top"
              />
            </motion.div>
            <div className="mt-3 text-center">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-900 dark:text-neutral-100"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-sm"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    className="text-black"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
