import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Content from "../Components/LayoutComponents/Content";
import LestNavbar from "../Components/LayoutComponents/LestNavbar";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins">
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
            <Navbar></Navbar>
            </nav>
            <main className="grid md:grid-cols-12 gap-4">
            <aside className="col-span-3">
                <LestNavbar></LestNavbar>
            </aside>
            <section className="col-span-6">
                {/* <Content></Content> */}
                <Outlet></Outlet>
                
                
                
            </section>
            <aside className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
            </main>
        </div>
    );
};

export default HomeLayout;