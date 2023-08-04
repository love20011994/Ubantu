
import Logindata from "../components/Logindata"
import Register from "../components/Register"
import Tabledata from "../components/Tabledata"
import ObjectForm from "../Form/Basicform"
 export const routesdatas=[
    {
        title: "Home",
        icon: "bi-house-fill",
        path: "/" ,
        element:<Tabledata/>
    },
    {
        "title": "About",
        "icon": "bi-info-circle-fill",
        "path": "/about",
        "element": <ObjectForm/>
    },
    {
        "title": "About",
        "icon": "bi-info-circle-fill",
        "path": "/register",
        "element": <Register/>
    },
    {
        "title": "About",
        "icon": "bi-info-circle-fill",
        "path": "/login",
        "element": <Logindata />
    }
]
