import React from "react";

const Search = () => {
    return (
        <form className="form-inline md-form form-sm active-pink active-pink-2 mt-2">
            <i className="fa fa-search" aria-hidden="true"/>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                   aria-label="Search"/>
        </form>
    )
}

export default Search;