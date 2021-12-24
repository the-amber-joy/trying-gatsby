import * as React from "react";
import Layout from "../../components/layout";
import { iframe } from "./resume.module.css";

const ResumePage = () => {
  return (
    <Layout pageTitle="My Resume">
      <iframe
        frameborder="0"
        className={iframe}
        src="https://docs.google.com/document/d/e/2PACX-1vSirVcD1gb24VTWbRMhlRDBdU5MVdK1_-u8tFp0LVAgxpzv370x9GaOJsXnYC8EKbs9y-w-e62NJSWl/pub?embedded=true"
      ></iframe>
    </Layout>
  );
};

export default ResumePage;
