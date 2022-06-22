// import { useSearch } from "@tanstack/react-location";
// import { createContext, useContext, useState } from "react";

// export default function CardShowcase(formData){

//     const search = useSearch();
//     return (
//     <div>
//         {JSON.stringify(search)}
//         <p>Name:{formData.fullName}</p>
//         <p>Me:{formData.aboutMe}</p>
//     </div>
//     );
// }
import "./showcase.css";
import { createContext, useContext, useState } from "react";
//import { useSearch } from "@tanstack/react-location";

import {useFormData} from "./App";

export default function CardShowCase() {
 const dataContext =  useFormData();


// console.log("dataContext",dataContext);

// console.log("dataContext.CSS",JSON.stringify(dataContext.CSS));
 const fullName = JSON.stringify(dataContext, ['fullName']);
 const aboutMe = JSON.stringify(dataContext, ['aboutMe']);  
 const HTML = Boolean(JSON.stringify(dataContext, ['HTML']));  
 const CSS = Boolean(JSON.stringify(dataContext, ['CSS'])); 
 const JS = Boolean(JSON.stringify(dataContext, ['JS'])); 
 const Git = Boolean(JSON.stringify(dataContext, ['Git'])); 
 const React = Boolean(JSON.stringify(dataContext, ['React'])); 
 const NodeJS = Boolean(JSON.stringify(dataContext, ['NodeJS'])); 
 const favouriteBooks = JSON.stringify(dataContext, ['favouriteBooks']);  


 
  return (
    
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp;
                          {fullName}
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;
                          {aboutMe}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with {fullName}</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href="{https://www.linkedin.com/in/mgasquez/}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href="{https://www.linkedin.com/in/mgasquez/}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to
                      {fullName} corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">
                      <p>
                        Hi, my name is&nbsp;<b>{ fullName }</b> 
                      </p>
                      <p>
                         <b>{ aboutMe }</b> 
                      </p>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      {CSS && (
                        <span class="has-dflex-center bs-md" title="CSS">
                          <i class="fab fa-css3-alt"></i>
                        </span>
                      )}
                      {HTML && (
                        <span class="has-dflex-center bs-md" title="HTML">
                          <i class="fab fa-html5"></i>
                        </span>
                      )}
                      {NodeJS && (
                        <span class="has-dflex-center bs-md" title="JS">
                          <i class="fab fa-js"></i>
                        </span>
                      )}
                      {JS && (
                        <span class="has-dflex-center bs-md" title="Sass">
                          <i class="fab fa-sass"></i>
                        </span>
                      )}
                      {Git && (
                        <span class="has-dflex-center bs-md" title="Git">
                          <i class="fab fa-git-alt"></i>
                        </span>
                      )}
                      {React && (
                        <span class="has-dflex-center bs-md" title="React">
                          <i class="fab fa-react"></i>
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                      <ol>
                        <li>
                          <p>
                            <b> HEy ${JSON.stringify(dataContext, ['favouriteBooks'])}</b> 
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Foundation series</b>&nbsp;- Isaac Asimov
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Cracking the Coding Interview</b>&nbsp;- Gayle
                            Laakmann
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Clean Code</b>&nbsp;- Rob Martin
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>A Brief History of Time</b>&nbsp;- Stephen
                            Hawking
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}