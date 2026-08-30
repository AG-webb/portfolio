import { Spinner } from "../Spinner";
import "./style.css";

const PageLoader = () => (
  <div className="page-loader">
    <Spinner className="size-12" />
  </div>
);

export default PageLoader;
