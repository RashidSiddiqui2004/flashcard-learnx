import Navbar from "../components/Navbar"


const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen w-full text-raleway">
            <Navbar />
            {children}
        </div>
    )
}

export default AppLayout