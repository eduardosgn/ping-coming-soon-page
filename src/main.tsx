import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { motion } from 'framer-motion';

ReactDOM.render(
  <React.StrictMode>
    <motion.div
      initial='initPage'
      animate='pageAnim'
      variants={{
        initPage: {
          opacity: 0,
        },
        pageAnim: {
          opacity: 1,
          transition: {
            duration: .5
          }
        }
      }}
    >
      <App />
    </motion.div>
  </React.StrictMode>,
  document.getElementById('root')
)
