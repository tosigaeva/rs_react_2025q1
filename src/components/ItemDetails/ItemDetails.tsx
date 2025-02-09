import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SearchItem } from '../../types/SearchResult';
import Loader from '../Loader/Loader';

const ItemDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState<SearchItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`https://stapi.co/api/v1/rest/animal/?uid=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setDetails(data.animal);
                setLoading(false);
            });
    }, [id]);

    const handleClose = () => {
        const params = new URLSearchParams(location.search);
        navigate(`/?${params.toString()}`);
    };

    return (
        <div className="ItemDetails" onClick={(e) => e.stopPropagation()}>
            <h3>Details</h3>
            {loading ? (
                <Loader />
            ) : details ? (
                <p>{details.name}</p>
            ) : (
                <p>No details available</p>
            )}
            <button onClick={handleClose}>Close</button>
        </div>
    );
};

export default ItemDetails;
