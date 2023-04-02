import { useState } from "react";
import { motion } from "framer-motion";
// Styles import
import styles from "/styles/pages/Home.module.scss";

const Toggle = ({ children, title, defaultToggle = false }: any) => {
   const [toggle, setToggle] = useState(defaultToggle);
   return (
      <motion.div className={`${styles.card}`}>
         <motion.div
            layout
            className={`${styles.question}`}
            onClick={() => setToggle(!toggle)}
         >
            <h3>{title}</h3>
            {toggle ? (
               <i className="bi bi-chevron-double-up"></i>
            ) : (
               <i className="bi bi-chevron-double-down"></i>
            )}
         </motion.div>
         <motion.div layout className={`${styles.answerWrapper}`}>
            {toggle ? children : ""}
         </motion.div>
      </motion.div>
   );
};

export default Toggle;
