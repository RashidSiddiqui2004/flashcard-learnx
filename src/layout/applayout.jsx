import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen w-full text-raleway flex flex-col">
            <Navbar />
            <div className="flex-grow">
                {children}
            </div> 
            <Footer />
        </div>
    )
}

export default AppLayout