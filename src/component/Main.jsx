
import { Outlet } from 'react-router-dom';
import Haeder from './Haeder';

const Main = () => {
    return (
        <div>
            <Haeder></Haeder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;