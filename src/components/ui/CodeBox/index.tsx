import { useCustomCodeBox } from "@/hooks";
import clsx from "clsx";
import parse from "html-react-parser";
import Skeleton from "../Skeleton";
import "./style.css";
import type { CodeBoxProps } from "./types";

const code = `import React from 'react';
import { UI, <UX> } from './engine';

// Architectural excellence by design
const Ararat = {
  role: "Web Front-end Developer",
  stack: ["React.js", "Typescript", "CSS/Tailwind"],
  metrics: { coreWebVitals: "99/100", cleanCodeRating: "10/10" }
};

export default function Portfolio() {
  return (
    <UI.Grid optimized={
      deliverPremiumExperiences()
    }
    />
  );
}`;

const CodeBox = ({ title }: CodeBoxProps) => {
  const { html, loading, error } = useCustomCodeBox(code);

  return (
    <div className="codebox">
      <div className="codebox__header">
        <div className="codebox__controls">
          <div className="codebox__control codebox__control_close"></div>
          <div className="codebox__control codebox__control_minimize"></div>
          <div className="codebox__control codebox__control_exit"></div>
        </div>
        <div className="codebox__content grow">
          <div className="codebox__title">{title}</div>
        </div>
      </div>
      <div
        className={clsx("codebox__body", error ? "codebox__body_error" : "")}
      >
        {loading ? <Skeleton className="min-h-100" /> : parse(html)}
      </div>
    </div>
  );
};

export default CodeBox;
