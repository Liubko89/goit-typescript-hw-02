import { RotatingLines, _Props3 } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC<_Props3> = () => {
  const defaultProps: _Props3 = {
    height: 96,
    width: 96,
    color: "grey",
    strokeWidth: 5,
    animationDuration: 0.75,
    wrapperStyle: {},
    wrapperClass: "",
    ariaLabel: "rotating-lines-loading",
  };

  return (
    <div className={css.loaderContainer}>
      <RotatingLines {...defaultProps} visible={true} />
    </div>
  );
};

export default Loader;
