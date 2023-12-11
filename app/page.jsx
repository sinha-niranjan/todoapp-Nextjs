import React, { Suspense } from "react";
import Form from "./addTodoForm";
import Todos from "./todos";

const page = async () => {
  // console.log(tasks)
  return (
    <div className="container">
      <Form />

      <Suspense fallback={<div>Loading ... </div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default page;
