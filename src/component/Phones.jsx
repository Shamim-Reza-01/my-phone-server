import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {
    const phones = useLoaderData()
    // const style = {
    //     'display':'flex'
    // }
    return (
        <div >
            <h2>my all phone here :{phones.length} </h2>
           <div className="">
           {
                phones.map(phone => <Link key={phone.id} to={`/phone/${phone.id}`}><li>{phone.name} ----------------,</li> </Link>)
            }
           </div>
        </div>
    );
};

export default Phones;