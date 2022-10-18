import "./Dashboard.css";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";

const Dashboard = (props) => {
    
    let navigationListItems = 
        [   
            {
                name: "Charmender",
                message: 0,
            },
             
            {
                name: "Cloyster",
                message: 3,
            },
             
            {
                name: "Bayleef",
                message: 0,
            },
             
            {
                name: "Quilava",
                message: 1,
            },
             
            {
                name: "Sharpedo",
                message: 2,
            },
        ];

    return (
        <>
            <article className="dashboard">
                <LeftPane navigationListItems={navigationListItems} buttonText="Go premium!"/>
                <RightPane />
            </article>
        </>

    );
}

export default Dashboard;