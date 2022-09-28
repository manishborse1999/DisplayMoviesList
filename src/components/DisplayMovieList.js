import React, { useEffect, useState } from 'react'
import MoviesData from './movielist.json'
import './style.css'

function DisplayMovieList() {
    const [movieList, setMovieList] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        setMovieList(MoviesData)
        sortList()
    }, [sort])

    const handleChange = (e) => {
        setSort(e.target.value)
    }

    // sorting logic
    const sortList = () => {
        if (sort === "ASC") {
            setMovieList([...movieList.sort((a, b) => (a.imdbRating > b.imdbRating) ? 1 : -1)]);
        } else if (sort === "DSC") {
            setMovieList([...movieList.sort((a, b) => (a.imdbRating > b.imdbRating) ? -1 : 1)]);
        } else {
            setMovieList([...MoviesData])
        }
    }

    return (
        <div className='moviesParent'>
            {/* sorting functionality for user */}
            <div className="sort">
                <h5>Sort (Rating)</h5>
                <select className="select" onChange={handleChange} >
                    <option value={-1}>Select</option>
                    <option value={"ASC"}>Ascending</option>
                    <option value={"DSC"}>Descending</option>
                </select>
            </div>
            {/* list of movies */}
            <div>
                <ul>
                    {
                        movieList.map((movie, i) => {
                            return (
                                <>
                                    <div className="movielist" key={i}><strong>{movie.title}</strong>
                                        <br />
                                        {movie.storyline}<br /><br />
                                        -----Rating : {movie.imdbRating}-----
                                    </div><br />
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DisplayMovieList