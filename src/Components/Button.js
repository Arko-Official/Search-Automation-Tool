import React from 'react'
import { Search } from './Search_Bar'

export default function Button() {
    return (
        <div className='container'>
            <div className="d-grid gap-2 col-3 mx-auto">
                <button className="btn btn-dark" id='Ser_btn' onClick={Search} type="button">Search</button>
            </div>
        </div>
    )
}
