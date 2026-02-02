import "./menu.css"
import MenuFilters from "./menuFilters";

function Menu() {
    return(
        <>
        <section className="menuSection">
            <div className="menuText">
                <h1 className="h1MenuText">
                    Menu
                </h1>
            </div>
            <MenuFilters />
        </section>
        </>
    );
}

export default Menu;