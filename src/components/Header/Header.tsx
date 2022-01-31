import { motion } from 'framer-motion';

import styles from './style.module.scss';
import PingLogo from '../../public/logo.svg';
import DashboardImage from '../../public/illustration-dashboard.png';

type TitleHeader = {
    title: string;
    subtitle: string;
};

export default function Header(props: TitleHeader) {
    return (
        <motion.section className={ styles.container }>
            <img src={ PingLogo } alt="Ping" />
            <motion.h1
                initial='titleInit'
                animate='titleAnim'
                variants={{
                    titleInit: {
                        opacity: 0,
                        y: 30
                    },
                    titleAnim: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .6,
                        }
                    }
                }}
            >
                { props.title }
            </motion.h1>
            <motion.p
                initial='paraInit'
                animate='paraAnim'
                variants={{
                    paraInit: {
                        opacity: 0,
                        y: -20
                    },
                    paraAnim: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .8,
                        }
                    }
                }}
            >
                { props.subtitle }
            </motion.p>

            <form>
                <input type="email" name="email" id="email" placeholder="Your e-mail address..." />
                <button type="submit">Notify me</button>
            </form>

            <img src={ DashboardImage } alt="Dashboard Illustration" className={ styles.dashImg } />
        </motion.section>
    );
};