import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    className={cn("w-6 h-6", className)}
  >
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const ReduxIcon = ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
    >
      <title>Redux</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.173 16.59c-1.385 1.155-3.328 1.488-5.263.957-.33-.092-.38-.458-.108-.658.27-.2.63-.102.95.002.922.298 2.055.152 2.87-.35.81-.502 1.137-1.405 1.03-2.312-.107-.91-.737-1.63-1.58-1.95-.84-.32-1.85-.29-2.73.08-1.07.45-1.933 1.29-2.38 2.37-.448 1.08-.43 2.3.04 3.39.47 1.09 1.39 1.95 2.56 2.35.33.11.41.5.15.73s-.63.2-.84.03c-2.01-1.1-3.26-3.2-3.13-5.52.13-2.32 1.55-4.33 3.65-5.22 2.1-.89 4.49-.67 6.33.56 1.84 1.23 2.8 3.29 2.62 5.39-.18 2.1-1.34 3.97-3.13 5.17z" fill="currentColor"/>
    </svg>
  );
  
export const WhatsappIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2.9A15.9 15.9 0 0 1 21.1 10" />
  </svg>
);