
import searchPageStyles from './SearchPage.module.css';

import { FormEvent } from 'react';
import { SearchPanel } from '../../components/searchPanel/SearcPanel';


export function SearcPage (props: unknown) {
    const onSubmitSearcForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

  return (
    <div className={searchPageStyles['search-page']}>
      <SearchPanel styles={searchPageStyles['search-page__search-panel']}  onSubmit={onSubmitSearcForm} />
    </div>
  );
};
