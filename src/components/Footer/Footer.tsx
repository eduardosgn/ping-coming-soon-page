import styles from './style.module.scss';

type copyText = {
    text: string;
};

export default function Footer(props: copyText) {
    return (
        <footer className={ styles.container }>
            <ul>
                <li>
                    <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                    <i className="fab fa-twitter"></i>
                </li>
                <li>
                    <i className="fab fa-instagram"></i>
                </li>
            </ul>

            <p id={ styles.copy }>{ props.text } <a href="https://github.com/eduardosgn" target='_blank'>Eduardo Nascimento</a></p>
        </footer>
    );
};