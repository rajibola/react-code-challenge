import React from "react";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collection.map((item) => (
          //   <CollectionItem key={item.id} item={item} />
          <div>SHOW ITEMS {item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
