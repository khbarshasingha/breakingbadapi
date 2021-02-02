import React from "react";

export const TableDisplay = ({ title, season, ep, a_date }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{season}</td>
      <td>{ep}</td>
      <td>{a_date}</td>
    </tr>
  );
};
