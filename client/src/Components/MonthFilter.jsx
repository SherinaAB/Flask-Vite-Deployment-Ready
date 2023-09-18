import React from "react";

function MonthFilter({ month, selectedMonth,  onSelectedMonth }) {
  const monthFilterButtons = month?.map((singleMonth) => {
    const monthName = singleMonth === selectedMonth ? "selected" : null;
    return (
      <button
        key={singleMonth.id}
        className={monthName}
        onClick={() =>  {
            onSelectedMonth(singleMonth)
            console.log(singleMonth)
            }
        }
      >
        {singleMonth.timeframe}
      </button>
    );
  });

  return (
    <div className="months">
      <h5>Select Month to View on Dashboards</h5>
      {monthFilterButtons}
    </div>
  );
}

export default MonthFilter;


// CLEAN SAMPLE CODE:
// function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//     const categoryButtons = categories.map((category) => {
//       const className = category === selectedCategory ? "selected" : null;
//       return (
//         <button
//           key={category}
//           className={className}
//           onClick={() => onSelectCategory(category)}
//         >
//           {category}
//         </button>
//       );
//     });
  
//     return (
//       <div className="categories">
//         <h5>Category filters</h5>
//         {categoryButtons}
//       </div>
//     );
//   }
  
//   export default CategoryFilter;