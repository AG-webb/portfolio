const Spinner = ({ className, size }: { className?: string; size: number }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <g fill="currentColor" stroke="currentColor" stroke-width="15">
        <circle r="15" cx="50" cy="150">
          <animateTransform
            attributeName="transform"
            type="translate"
            calcMode="spline"
            dur="0.8"
            values="0 0;0 -100"
            keySplines=".5 0 .5 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle r="15" cx="50" cy="50">
          <animateTransform
            attributeName="transform"
            type="translate"
            calcMode="spline"
            dur="0.8"
            values="0 0;100 0"
            keySplines=".5 0 .5 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle r="15" cx="150" cy="50">
          <animateTransform
            attributeName="transform"
            type="translate"
            calcMode="spline"
            dur="0.8"
            values="0 0;0 100 "
            keySplines=".5 0 .5 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle r="15" cx="150" cy="150">
          <animateTransform
            attributeName="transform"
            type="translate"
            calcMode="spline"
            dur="0.8"
            values="0 0;-100 0"
            keySplines=".5 0 .5 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
};

export default Spinner;
