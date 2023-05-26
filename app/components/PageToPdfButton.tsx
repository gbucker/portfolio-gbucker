"use client";
import React from 'react';
import PageToPdfHandler from "@/app/utils/PageToPdfHandler";

function PageToPdfButton({pathname}:{pathname:string}) {
  return (
    <a
      className="hover:cursor-pointer bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-400 hover:text-gray-900 transition"
      onClick={(e) => PageToPdfHandler(e, pathname)}
      title="Imprimir PDF"
      target="_blank"
      rel="noopener noreferrer"
    >
        Imprimir PDF
    </a>
  );
}

export default PageToPdfButton;