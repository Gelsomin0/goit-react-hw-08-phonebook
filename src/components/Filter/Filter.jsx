import { useEffect, useState } from 'react';
import css from './Filter.module.css';

const Filter = ({ filteredList }) => {
    const [filter, setFilter] = useState('')

    const handleFilterInput = ({ target }) => {
        if (target.name === 'filter') setFilter(target.value);
    }

    filteredList(filter);

    return (
        <>
            <div className={css.filterBar}>
                <h5>Search your contact by name: </h5>
                <input
                    className={css.filterInput}
                    onChange={handleFilterInput}
                    value={filter}
                    name='filter'
                    type='text'
                    autoComplete='off'
                />
            </div>
            <hr className={css.horisontalLine} />
        </>
    );
}

export default Filter;