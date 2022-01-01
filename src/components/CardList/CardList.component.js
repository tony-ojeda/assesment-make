import { useEffect, useState } from 'react';
import CardModal from '../CardModal/CardModal.component';
import CardTemplate from '../CardTemplate/CardTemplate.component';
import styles from './CardList.module.scss';
import axios from 'axios';

function CardList() {

    const [ products, fetchProducts ] = useState([]);

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                fetchProducts(response.data)
            })
    }, [])

    return (
        <>
        <div className="container">
            <div className={ styles.galery } >
            {
                products.map((item) => (
                    <CardTemplate key={item.id} product={ item }></CardTemplate>
                ))
            }
            </div>
        </div>
        </>
    )
}

export default CardList;
