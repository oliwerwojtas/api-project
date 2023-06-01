import Navigation from "../components/Navigation";
import GlobalStyles from "../components/GlobalStyle";
//utilities
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      <Outlet />
    </div>
  );
};
export default RootLayout;
