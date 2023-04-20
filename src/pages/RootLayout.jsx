import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import GlobalStyles from "../components/GlobalStyle";
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
