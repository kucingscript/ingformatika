import { Link } from "react-scroll";
import { TbArrowTopTail } from "react-icons/tb";

function ScrollTop() {
  return (
    <Link to="beranda" smooth={true} duration={500}>
      <div className="fixed bottom-0 right-4 my-3 btn btn-md btn-ghost btn-circle text-white">
        <TbArrowTopTail className="w-6 h-6" />
      </div>
    </Link>
  );
}

export default ScrollTop;
