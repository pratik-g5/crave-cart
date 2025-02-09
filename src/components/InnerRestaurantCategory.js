import { useState } from 'react';
import InnerItemList from './InnerItemList';

const InnerRestaurantCategory = ({ categories }) => {
  // Store expanded state for each category by ID
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleClick = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId], // Toggle only the clicked category
    }));
  };

  return (
    <div className="mb-2 p-4 shadow-lg">
      {categories.map((category) => {
        const isExpanded = expandedCategories[category.categoryId] || false;

        return (
          <div key={category?.categoryId}>
            {/* Clickable Category Header */}
            <div
              className="flex justify-between p-2 cursor-pointer"
              onClick={() => handleClick(category.categoryId)}
            >
              <span className="font-bold">{category?.title}</span>
              <span>{isExpanded ? '△' : '▽'}</span>
            </div>

            {/* Expand items only for clicked category */}
            {isExpanded && <InnerItemList list={category?.itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default InnerRestaurantCategory;
