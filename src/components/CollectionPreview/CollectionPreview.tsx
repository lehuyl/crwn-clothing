import React from 'react';
import { Item } from '../../common/types';
import CollectionItem from '../CollectionItem/CollectionItem';

interface Props {
    title: string;
    items: Item[];
}

const CollectionPreview: React.FunctionComponent<Props> = ({ title, items }: Props) => (
    <div className="flex flex-col mb-4">
        <h1 className="text-2xl mb-4">{title}</h1>
        <div className="flex justify-between">
            {items
                .filter((item: Item, idx: number) => idx < 4)
                .map(({ id, ...otherItemProps}: Item) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);
export default CollectionPreview;
