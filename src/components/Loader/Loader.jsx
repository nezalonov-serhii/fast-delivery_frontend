import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
   return (
      <ThreeCircles
         height="200"
         width="200"
         color="#ff4c00"
         visible={true}
         ariaLabel="three-circles-rotating"
      />
   );
};

export default Loader;
