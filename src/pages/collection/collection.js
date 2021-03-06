import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../../components/collection-item';
import { Container } from './styles';

const Collection = ({ collection, match }) => {
  const title = match.params.collectionId;

  return (
    <Container>
      <h2 className='title'>{title}</h2>
      <div className='products-container'>
        {collection.map((item) => (
          <CollectionItem data={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default withRouter(Collection);
