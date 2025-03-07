import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/fa';
import {Fafire, FaPoo} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-900 dark:text-white shadow-lg
                        bg-primary text-secondary">

            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>

            <SideBarIcon icon={<FaFire Size="28" />}/>
            <SideBarIcon icon={<BsPlus Size="32" />}/>
            <SideBarIcon icon={<BsFillLightningFill Size="20" />}/>
            <SideBarIcon icon={<FaPoo Size="20" />}/>
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip ' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;