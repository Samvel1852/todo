import Card from '../card/card';

import styles from './cards.module.css';

const Cards = ({tasks, editingHandler}) => {
    return (
            <div className={styles.Cards}>
                <div className={styles.Wrapper} >
                    {
                        tasks.map(item => {
                            return (
                                    <Card description={item.description} key={item.id} editing={item.editing} onInputChange={editingHandler} taskId={item.id} />
                                )
                        })
                    }
                </div>
            </div>
        )
}

export default Cards;
