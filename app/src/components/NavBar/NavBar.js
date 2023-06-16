import React from 'react';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';


function NavBar() {
    return (
        <div className='navBarContainer'>
            <div className='navBarIcons'>
                <HomeIcon style={{
                    color:'silver',
                    fontSize: '50px',
                    }} />
                <span className='spamNav'>Home</span>
            </div>
            <div className='navBarIcons'>
                <PeopleAltIcon 
                style={{
                    color:'silver',
                    fontSize: '50px',
                    }} />
                <span className='spamNav'>About as</span>
            </div>
            <div className='navBarIcons'>
                <MenuBookIcon 
                style={{
                    color:'silver',
                    fontSize: '50px',
                    }}/>
                <span className='spamNav'>Resources</span>
            </div>
            <div className='navBarIcons'>
                <CalendarMonthIcon
                style={{
                    color:'silver',
                    fontSize: '50px',
                    }} />
                <span className='spamNav'>Events</span>
            </div>
            <div className='navBarIcons'>
                <FavoriteBorderIcon 
                style={{
                    color:'silver',
                    fontSize: '50px',
                    }}/>
                <span className='spamNav'>Support Us</span>
            </div>
            <div className='navBarIcons'>
                <SearchIcon
                style={{
                    color:'silver',
                    fontSize: '50px',
                    }} />
                <span className='spamNav'>Search</span>
            </div>
        </div>
    );
}
export default NavBar;