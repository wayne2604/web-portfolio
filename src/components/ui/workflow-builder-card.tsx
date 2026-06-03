import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Code } from "lucide-react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface WorkflowBuilderCardProps {
  imageUrl: string;
  status: "Active" | "Inactive";
  lastUpdated: string;
  title: string;
  description: string;
  tags: string[];
  techStack: React.ElementType[];
  link?: string;
  github?: string;
  tools?: string;
  detailsLink?: string;
  className?: string;
  disableGlow?: boolean;
}

export const WorkflowBuilderCard = ({
  imageUrl,
  status,
  lastUpdated,
  title,
  description,
  tags,
  techStack,
  link,
  github,
  tools,
  className,
  disableGlow = false,
}: WorkflowBuilderCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        // Element-relative coordinates (needed because motion.div transform breaks background-attachment: fixed)
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (clientX / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (clientY / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const getInlineStyles = () => {
    return {
      '--base': '78', // Accent color hue (lime green)
      '--spread': '200',
      '--radius': '12',
      '--border': '4',
      '--backdrop': 'rgba(10, 10, 10, 0.8)',
      '--backup-border': 'rgba(255, 255, 255, 0.08)',
      '--size': '350',
      '--outer': '1',
      touchAction: 'none' as const,
    } as React.CSSProperties;
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={cn("w-full max-w-sm cursor-pointer", className)}
    >
      <div
        ref={cardRef}
        {...(!disableGlow ? { 'data-glow': true } : {})}
        style={!disableGlow ? getInlineStyles() : { touchAction: 'none' as const }}
        className={cn("rounded-xl bg-card text-card-foreground flex flex-col justify-between h-full", isHovered && "is-hovered")}
      >
        {!disableGlow && <div data-glow-child></div>}

        <div className="overflow-hidden rounded-xl flex flex-col justify-between h-full">
        <div>
          {/* Card Image */}
          <div className="relative h-36 w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          </div>

          <div className="p-4">
            {/* Always-visible header content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{lastUpdated}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                <div className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      status === "Active" ? "bg-green-500" : "bg-red-500"
                    )}
                    aria-label={status}
                  />
                  <span>{status}</span>
                </div>
              </div>
              <h3 className="mt-1 text-lg font-semibold text-card-foreground">
                {title}
              </h3>
            </div>

            {/* Animated description and tags section */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  key="details"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={detailVariants}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground">{description}</p>
                  
                  {tools && (
                    <div className="mt-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground opacity-60">Tech Stack</span>
                      <p className="text-xs text-card-foreground mt-0.5">{tools}</p>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-500 hover:text-emerald-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Zap size={12} className="text-emerald-500" />
                        Live Preview
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Code size={12} />
                        Github Code
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between border-t border-border p-4 mt-auto">
          {/* Bottom-left: Actionable links (GitHub / Live Site) */}
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8EEB4] hover:text-[#A7D129] transition-colors"
                title="View GitHub Code"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F8EEB4] hover:text-[#A7D129] transition-colors"
                title="View Live Site"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGlobe size={16} />
              </a>
            )}
          </div>

          {/* Bottom-right: Tech Stack Logos */}
          <div className="flex items-center gap-3">
            {techStack.map((Icon, index) => (
              <div
                key={index}
                className="text-[#F8EEB4] hover:text-[#A7D129] transition-colors"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};
