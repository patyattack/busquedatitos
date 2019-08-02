import React, { useEffect, useContext, useState } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [posts, setPosts] = useContext(MovieContext);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        setSearch();
      },[search]);

    const updateSearch = e => {
        console.log(e.target.value);
        setSearch(e.target.value);
      };

    const getSearch = e => {
        e.preventDefault();
        setSearch(search);
        setSearch('');
      }

    return (
        <div>
            <h3>User</h3>
            <p>List of Movies: {posts.length}</p>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={getSearch}>
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={search}
                            onChange={updateSearch}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>




        </div>
    );
}

export default Nav;