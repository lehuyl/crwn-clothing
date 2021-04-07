import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Section } from '../../common/types';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: Section & RouteComponentProps<any>) => {
    return (
        // MenuItem
        <div
            className={`${size} menu-item flex flex-auto mx-2 mb-4 min-w-3/10 h-64 items-center justify-center border border-black overflow-hidden`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
            
                className="h-full w-full bg-center bg-cover background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            {/* Content */}
            <div className="flex flex-col h-20 px-4 items-center justify-center border border-black bg-white bg-opacity-70 absolute hover:bg-opacity-90">
                <h1 className="font-bold mb-2 text-2xl text-gray-500">
                    {title?.toUpperCase()}
                </h1>
                <span className="font-light text-lg">SHOP NOW</span>
            </div>
        </div>
    );
};
export default withRouter(MenuItem);
