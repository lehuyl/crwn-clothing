import React from 'react';
import Category from './components/Category/Category';

const HomePage = () => (
    <div className="flex flex-col items-center py-20 px-80">
        <div className="flex flex-wrap w-full justify-between">
            <Category name={'Hats'}/>
            <Category name={'Jackets'}/>
            <Category name={'Sneakers'}/>
            <Category name={'Men'}/>
            <Category name={'Women'}/>
        </div>
    </div>
);
export default HomePage;
