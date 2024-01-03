
'use client'


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import Link from 'next/link';

const itemVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: -72, opacity: 0, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { y: -300, opacity: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 20 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <motion.nav
      initial={false}
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      className="flex justify-between items-center bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent p-5"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        <Link href='/'>
          <p className="text-3xl text-white font-bold">S</p>
        </Link>
      </motion.div>

      <div className="hidden md:flex items-center space-x-12">
        {["Hotel", "Restaurant", "Activités", "À propos", "Contact"].map(
          (item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              className="relative hover-underline-animation"
              style={{ display: "inline-block" }}
            >
              <Link href='/fr/${item}' className="text-lg">
                <span>{item}</span>
              </Link>
            </motion.div>
          )
        )}
      </div>

      <div className="md:hidden" onClick={toggleMenu} style={{ marginLeft: 'auto' }}>
        <div className="burger">
          <div className={isOpen ? "cross" : ""}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-center text-white space-y-4">
              {["Hotel", "Restaurant", "Activités", "À propos", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href='/fr/{item}'
                    className="text-lg"
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="https://bb003c2d64ddab68.sirvoy.me/" passHref>
          <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">
            Book Now
          </button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
