import React from "react";
import { useParams } from "react-router-dom";

const TemplateDetail:React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Template Details </h1>
      <p>Template Details page for template id :{id}</p>
    </div>
  );
};

export default TemplateDetail;
