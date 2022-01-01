import CardModal from '../CardModal/CardModal.component';
import { useState } from 'react';
import styles from './CardTemplate.module.scss';

function CardTemplate(props) {
    const data = props.product
    let [state, setState] = useState({ show: false });
    let [product, setProduct] = useState({});

    function loadProductInModal(item) {
        setProduct( item );
        showModal();
    }

    function showModal() {
        setState({ show: true })
    }

    function hideModal() {
        setState({ show: false })
    }

    return(
        <> 
            <div className={ styles.card }>
                <div className="card__image">
                    <img className={ styles.card__image } src={ data.image } alt="image data" />
                </div>
                <div className={ styles.card__body }>
                    <span className={ styles.card__title }>{ data.title }</span>
                    <div className={ styles.card__action }>
                        <span className={ styles.time }>00:01:01</span>
                        <button onClick={ () => loadProductInModal(data) }>Go To Detail</button>
                    </div>
                </div>
            </div>
            <CardModal show={ state.show } product={ product } handleClose={ hideModal }></CardModal>
        </>
    )
}

export default CardTemplate;
