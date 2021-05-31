import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { Section } from '../../common/types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/Directory/DirectorySelector';

interface Props {
    sections: Section[];
}

const Directory = ({ sections }: Props) => 
        (
            <div className="flex flex-wrap w-full justify-between">
                {sections.map(({ id, ...otherSectionProps }: Section) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
