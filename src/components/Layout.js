import { Outlet } from "react-router-dom";

//La partie  la plus dynmaique du site avec un appel de plusieurs Routes à la fois
const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    );
};

export default Layout;