import Image from "next/image";
import logo from "@/public/Logo/Infinity.png"

const Header = () => {
  return <header>
    <div className="logo-main">
      <div className="logo-container">
        <Image fill src={logo} alt="" />
      </div>
      <h2>infivent</h2>
    </div>
  </header>;
};

export default Header;
