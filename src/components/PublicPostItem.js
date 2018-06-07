import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicPostItem = ({id, title, body, createdAt}) => (
    <Link className="list-item mt-3" to={`/read/${id}`}>
        <div>
            <h1 className="list-item__title">{title}</h1>
        </div>
    </Link>
);


export default PublicPostItem;