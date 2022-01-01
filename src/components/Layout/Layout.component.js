import Header from "../Header/Header.component";

function Layout(props) {
    return (
        <>
            <Header />
            { props.children }
        </>
    )
}

export default Layout;
