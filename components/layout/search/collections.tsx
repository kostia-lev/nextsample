import { Suspense } from 'react';

import { getCollections } from 'lib';
import FilterList from './filter';
import Loader from "./loader";

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

export default function Collections() {
  return (
    <Suspense
      fallback={<Loader />}
    >
      <CollectionList />
    </Suspense>
  );
}
