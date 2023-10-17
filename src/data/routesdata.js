
import Checkoutitem from "../components/Checkoutitem"
import Logindata from "../components/Logindata"
import Newpayment from "../components/Newpayment"
import PaymentGateway from "../components/PaymentGateway"
import Register from "../components/Register"
import Tabledata from "../components/Tabledata"
import ObjectForm from "../Form/Basicform"
let notificationfnc1;
// let addcartdata;
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
    },
    {
        "title": "About",
        "icon": "bi-info-circle-fill",
        "path": "/love",
        "element": <Newpayment />
    },
    {
        "title": "paypal",
        "icon": "bi-info-circle-fill",
        "path": "/love1",
        "element": <PaymentGateway notificationfnc1={notificationfnc1}/>
        
    }
    ,
    // {
    //     "title": "123",
    //     "icon": "bi-info-circle-fill",
    //     "path": "/kal",
    //     "element": <Checkoutitem addcartdata={addcartdata}/>
    //     //  Checkoutitem
    // }
]
