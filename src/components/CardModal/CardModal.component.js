import styles from './CardModal.module.scss';

function CardModal(props) {
    const product  = props.product;
    const showHideClassName = props.show ? 'open' : 'close';

    return (
        <>
            <div className={ `${styles.modal} ${showHideClassName}` }>
                <div className={ styles.modal__content }>
                    <span className={ styles.hidden } onClick={ props.handleClose }>&times;</span>
                    <img className={ styles.modal__image } src={ product.image } alt="" />
                    <div className={ styles.modal__info }>
                        <span className={ styles.title }>{ product.title }</span>
                        <span className={ styles.description }>{ product.description }</span>
                        <div className={ styles.details }>
                            <div>
                                Price: <span className={ styles.price }>{ product.price }</span>
                            </div>
                            <div>
                                Stock: <span className={ styles.count }>{ product.rating?.count }</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardModal;
