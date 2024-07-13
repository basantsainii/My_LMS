import { Children, createContext } from "react";
export const CurrentContext = createContext("");






// import React, { useState, useEffect } from 'react';
// import { Route, Link } from 'react-router-dom';

// const MenuItem = ({ item, nestedItems, isSelected, onSelect }) => {
//   const [isNestedItemSelected, setIsNestedItemSelected] = useState(false);
//   const [selectedNestedItem, setSelectedNestedItem] = useState(null);

//   useEffect(() => {
//     if (isSelected && nestedItems.length > 0) {
//       setSelectedNestedItem(nestedItems[0]);
//       setIsNestedItemSelected(true);
//     }
//   }, [isSelected, nestedItems]);

//   const handleNestedItemClick = (nestedItem) => {
//     setSelectedNestedItem(nestedItem);
//     setIsNestedItemSelected(true);
//     onSelect(item, nestedItem);
//   };

//   return (
//     <div>
//       <Link to={item.path}>{item.label}</Link>
//       {isSelected && (
//         <ul>
//           {nestedItems.map((nestedItem) => (
//             <li key={nestedItem.path}>
//               <Link
//                 to={nestedItem.path}
//                 onClick={() => handleNestedItemClick(nestedItem)}
//                 className={selectedNestedItem === nestedItem ? 'selected' : ''}
//               >
//                 {nestedItem.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// const Menu = () => {
//   const [selectedItem, setSelectedItem] = useState({ item: 'item1', nestedItem: 'nestedItem1' });

//   const handleSelect = (item, nestedItem) => {
//     setSelectedItem({ item, nestedItem });
//   };

//   return (
//     <div>
//       <Route path="/" element={<MenuItem item="item1" nestedItems={[{ label: 'Nested Item 1', path: '/item1/nestedItem1' }, { label: 'Nested Item 2', path: '/item1/nestedItem2' }, { label: 'Nested Item 3', path: '/item1/nestedItem3' }, { label: 'Nested Item 4', path: '/item1/nestedItem4' }]} isSelected={selectedItem.item === 'item1'} onSelect={handleSelect} />} />
//       <Route path="/" element={<MenuItem item="item2" nestedItems={[{ label: 'Nested Item 5', path: '/item2/nestedItem5' }, { label: 'Nested Item 6', path: '/item2/nestedItem6' }, { label: 'Nested Item 7', path: '/item2/nestedItem7' }, { label: 'Nested Item 8', path: '/item2/nestedItem8' }]} isSelected={selectedItem.item === 'item2'} onSelect={handleSelect} />} />
//       <Route path="/" element={<MenuItem item="item3" nestedItems={[{ label: 'Nested Item 9', path: '/item3/nestedItem9' }, { label: 'Nested Item 10', path: '/item3/nestedItem10' }, { label: 'Nested Item 11', path: '/item3/nestedItem11' }, { label: 'Nested Item 12', path: '/item3/nestedItem12' }]} isSelected={selectedItem.item === 'item3'} onSelect={handleSelect} />} />
//     </div>
//   );
// };

// export default Menu;