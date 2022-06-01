import Pagination from 'react-bootstrap/Pagination'
import React, {useState} from "react";

const Page = ({search, meta}) => {
    const [pageOffset, setPageOffset] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const pageCount = 5;
    const lastPage = Math.min(9, Math.ceil(meta.total_count / pageCount));
    const lastOffset = Math.trunc(lastPage / 10) * 10;

    let items = [];
    for (let number = 1 + pageOffset; number <= Math.min(10 + pageOffset, lastPage); number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => go(number)}>
                {number}
            </Pagination.Item>
        );
    }

    const go = (page) => {
        setActivePage(page)

        search(page);
    }

    const goFirst = () => {
        setActivePage(1);
        setPageOffset(0);

        search(1);
    }

    const goPrev = () => {
        if (pageOffset === 0) return;

        setActivePage(activePage - 10);
        setPageOffset(pageOffset - 10);

        search(activePage - 10);
    }

    const goNext = () => {
        if (pageOffset === lastOffset) return;

        setActivePage(activePage + 10);
        setPageOffset(pageOffset + 10);

        search(activePage + 10);
    }

    const goLast = () => {
        setActivePage(lastPage);
        setPageOffset(lastOffset);

        search(lastPage);
    }

    return (
        <Pagination>
            <Pagination.First onClick={goFirst}/>
            <Pagination.Prev onClick={goPrev}/>
            {items}
            <Pagination.Next onClick={goNext}/>
            <Pagination.Last onClick={goLast}/>
        </Pagination>
    )
}

export default Page;