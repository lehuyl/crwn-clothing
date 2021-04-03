import React from 'react';

interface Props {
    name: string;
}

const Category = ({name}: Props) => {
    return (
        <div className="flex flex-auto min-w-30 h-64 items-center justify-center border border-black ">
            <div className="flex flex-col h-20 px-4 items-center justify-center border border-black">
                <h1 className="font-bold mb-2 text-2xl text-gray-500">{name?.toUpperCase()}</h1>
                <span className="font-light text-lg">SHOP NOW</span>
            </div>
        </div>
    );
};
export default Category;