export const PortfolioCheck = ({ color }: any) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.5892 0 0 3.58879 0 7.99908C0 12.4094 3.5892 16 8 16C12.4108 16 16 12.4112 16 8.00092C16 3.59063 12.4108 0 8 0ZM11.447 6.47421L7.44611 10.7811C7.26518 10.9768 7.01777 11.0765 6.76852 11.0765C6.55435 11.0765 6.34203 11.0027 6.16663 10.855L4.012 9.00888C3.62428 8.67659 3.57997 8.09507 3.9123 7.70739C4.24464 7.31972 4.82622 7.27357 5.21394 7.60771L6.69467 8.87597L10.0919 5.21888C10.439 4.84597 11.0224 4.82382 11.3972 5.17088C11.772 5.51794 11.7923 6.1013 11.447 6.47421Z"
        fill={color || "#E10000"}
      />
    </svg>
  );
};
