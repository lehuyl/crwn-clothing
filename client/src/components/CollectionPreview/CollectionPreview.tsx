import React from 'react';
import { Collection, Item } from '../../common/types';
import CollectionItem from '../CollectionItem/CollectionItem';

interface Props {
    collection: Collection;
}

const CollectionPreview: React.FunctionComponent<Props> = ({
    collection,
}: Props) => {
    const { title, items } = collection;

    return (
        <div className="flex flex-col mb-4">
            <h1 className="text-2xl mb-4">{title}</h1>
            <div className="flex justify-between">
                {items
                    .filter((item: Item, idx: number) => idx < 4)
                    .map((item: Item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};
export default CollectionPreview;
