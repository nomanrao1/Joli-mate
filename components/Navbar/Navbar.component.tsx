import React from "react";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";
import { useMediaQuery } from "@react-hook/media-query";

export const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return <>{isSmallScreen ? <MobileNav /> : <DesktopNav />}</>;
};
