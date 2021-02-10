import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-color-ake-008_1.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=741e62e18bff81285841f5dfa2f333f6" alt = "" />
                <Avatar src = {user.photoUrl} className="sidebar__avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
             <p>Who viewed you</p>
             <p className="sidebar__statNumber">78</p>
            </div>

            <div className="sidebar__stat">
            <p>Views on post</p>
             <p className="sidebar__statNumber">578</p>
            </div>
        </div>

         <div className="sidebar__bottom">
             <p>Recent</p>
             {recentItem('reactjs')}
             {recentItem('programming')}
             {recentItem('design')}
             {recentItem('requirements')}
             {recentItem('developer')}

         </div>

        </div>
    )
}

export default Sidebar
