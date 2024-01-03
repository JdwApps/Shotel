// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';

import { styleScript } from "../fonts";
import { poppins } from "../fonts";

const supabaseUrl = 'https://hcfverwtnuachlqycvos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZnZlcnd0bnVhY2hscXljdm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNjgxMTAsImV4cCI6MjAxODk0NDExMH0.OlZ46uVL9GuetJg5m7VFoxCkU054l9nxJiT5vSD54UQ';
const supabase = createClient(supabaseUrl, supabaseKey);

const displayMenu = (menuData) => {
    const categoryOrder = ['tapas', 'entree', 'plat', 'dessert'];

    const groupedMenu = groupByCategory(menuData);

    const sortedCategories = categoryOrder.filter(category => groupedMenu[category]);

    return sortedCategories.map(category => (
      <div key={category} className="w-full justify-center text-center ">
        <div className={styleScript.className}>
          <h2 className="text-8xl text-gray-200 align-text-center mt-24 mb-12">{category}</h2>
        </div>
        {groupedMenu[category].map((item) => (
          <div key={item.id}  className={poppins.className}>
            <p className="text-2xl ph-8 font-bold text-gray-200 align-text-center">
              {item.nom_en}
            </p>
            <p className="text-l text-gray-200 pl-8 pr-8 lg:text-xl align-text-center">
              {item.description_en}
            </p>
            <p className="text-2xl text-gray-200 align-text-center pb-12">
              ${item.prix}
            </p>

          </div>
        ))}
                    <div className='w-1/5 h-2 rounded-full bg-gray-400 m-auto'>
          </div>
      </div>
    ));
  };

  const groupByCategory = (menuData) => {
    return menuData.reduce((grouped, item) => {
      const category = item.categorie;

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category].push(item);
      return grouped;
    }, {});
  };

function CollapsibleMenu({ title, menuData }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    <div className=' justify-center w-3/4 m-auto items-çenter'>
      <div className='bg-gray-600  justify-self-center items-center rounded-lg'>
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-4xl text-gray-200 text-center mt-24 p-12 mb-12">{title}</h2>
        </motion.div>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full justify-center text-center pb-8"
            >
              <div className={styleScript.className}>
                {displayMenu(menuData)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    );
  }
  
  function DinerMenu() {
    const [dinerData, setDinerData] = useState([]);
    const [dejeunerData, setDejeunerData] = useState([]);
  
    useEffect(() => {
      async function fetchData(table, setData) {
        try {
          const { data, error } = await supabase.from(table).select('*');
  
          if (error) {
            throw error;
          }
  
          setData(data);
        } catch (error) {
          console.error(`Error fetching ${table} data:`, error.message);
        }
      }
  
      fetchData('diner', setDinerData);
      fetchData('dejeuner', setDejeunerData);
    }, []);
  
   
  
    return (
      <div>
        <CollapsibleMenu title="Diner" menuData={dinerData} />
        <CollapsibleMenu title="Dejeuner" menuData={dejeunerData} />
      </div>
    );
  }
  
  export default DinerMenu;