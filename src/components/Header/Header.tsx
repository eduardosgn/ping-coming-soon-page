import styles from './style.module.scss';
import PingLogo from '../../public/logo.svg';

type TitleHeader = {
    title: string;
    subtitle: string;
};

export default function Header(props: TitleHeader) {
    return (
        <div className={ styles.container }>
            <img src={ PingLogo } alt="Ping" />
            <h1>{ props.title }</h1>
            <p>{ props.subtitle }</p>

            <div className={ styles.emailForm }>
                <form>
                    <input type="email" name="email" id="email" placeholder="Your e-mail address..." />
                    <button type="submit">Notify me</button>
                </form>
            </div>
        </div>
    );
};