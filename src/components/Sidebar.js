import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { Avatar, Typography } from "@mui/material";
import profile from "../assets/profile.png";

const NavIcon = styled(Link)`
  display: none;
  @media screen and (min-width: 1024px) {
    margin-left: 15.5rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 4%;
  }
`;

const SidebarNav = styled.nav`
  font-family: "Montserrat", sans-serif;
  background: var(--dark);
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  transition: 350ms;
  z-index: 100000;
  .nav-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e1e9fc;
    list-style: none;
    height: 60px;
    width: 20%;
    text-decoration: none;
    font-size: 1.3rem;
    opacity: 0.3;
    transition: 0.3s ease-in-out all;
    &:hover {
      opacity: 1;
      cursor: pointer;
      font-weight: bold;
      border-bottom: 4px solid var(--dark-purple);
      background-color: #2e313c;
      border-radius: 5px;
    }
  }
  .nav-link span {
    display: none;
  }
  a.active {
    opacity: 1;
    border-bottom: 4px solid var(--dark-purple);
    background-color: #2e313c;
    border-radius: 5px;
  }
  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 100vh;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-229px")};
    transition: 350ms;
    z-index: 100000;
    .nav-link-wrapper {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .nav-link {
      display: flex;
      justify-content: flex-start;
      color: #e1e9fc;
      padding: 30px;
      height: 80px;
      width: 100%;
      font-size: 1rem;
      &:hover {
        padding-left: 2.4rem;
        border-left: 4px solid var(--dark-purple);
        background-color: #2e313c;
        border-bottom: none;
        border-radius: 0;
      }
    }
    .nav-link span {
      display: flex;
      margin-left: 0.6rem;
    }
    a.active {
      border-left: 4px solid var(--dark-purple);
      border-bottom: none;
      border-radius: 0;
      /* border: none; */
      /* background-color: #2e313c; */
    }
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  .arrows {
    color: var(--grey);
  }
  .image-social-wrapper {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .image-social-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      margin-top: -3rem;
    }
    .social-links-wrapper ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social-links-wrapper ul li {
      list-style: none;
      padding: 0.3rem;
    }
    .social-link {
      border-radius: 50%;
      background: #2e313c;
      padding: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.5;
      transition: 0.3s ease-in-out all;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleNavClick = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              {sidebar ? (
                <IoIcons.IoIosArrowDropleftCircle
                  onClick={showSidebar}
                  className="arrows"
                />
              ) : (
                <IoIcons.IoIosArrowDroprightCircle
                  onClick={showSidebar}
                  className="arrows"
                />
              )}
            </NavIcon>
            <div className="image-social-wrapper">
              <Avatar
                alt="Calvin Kim"
                src={profile}
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid #2e313c",
                  marginBottom: ".8rem",
                }}
              />
              <Typography
                variant="overline"
                fontSize="1rem"
                fontWeight="bold"
                sx={{ color: "#fff" }}
              >
                @Calvin Kim
              </Typography>
              <Typography
                variant="overline"
                fontSize=".7rem"
                sx={{ color: "#666a78" }}
                marginTop="-.4rem"
                marginBottom=".5rem"
              >
                Software Developer
              </Typography>
              <div className="social-links-wrapper">
                <ul>
                  <li>
                    <a
                      href="https://github.com/calvin-kim13"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <FiIcons.FiGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/calvin-kim-143aa51a2/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <FaIcons.FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../assets/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <AiIcons.AiOutlineFile />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-link-wrapper">
              <NavLink to="/" className="nav-link" onClick={handleNavClick}>
                <AiIcons.AiOutlineHome /> <span>Home</span>
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={handleNavClick}
              >
                <BsIcons.BsPerson /> <span>About</span>
              </NavLink>
              <NavLink
                to="/projects"
                className="nav-link"
                onClick={handleNavClick}
              >
                <RiIcons.RiPagesLine /> <span>Projects</span>
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={handleNavClick}
              >
                <BiIcons.BiEnvelope /> <span>Contact</span>
              </NavLink>
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";
// import * as IoIcons from "react-icons/io";
// import * as FaIcons from "react-icons/fa";
// import * as FiIcons from "react-icons/fi";
// import * as AiIcons from "react-icons/ai";
// import * as BsIcons from "react-icons/bs";
// import * as BiIcons from "react-icons/bi";
// import * as RiIcons from "react-icons/ri";
// import { IconContext } from "react-icons/lib";
// import { Avatar, Typography } from "@mui/material";
// import profile from "../assets/profile.png";

// const NavIcon = styled(Link)`
//   margin-left: 15.5rem;
//   font-size: 2rem;
//   height: 6rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav`
//   font-family: "Montserrat", sans-serif;
//   background: var(--dark);
//   width: 300px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-229px")};
//   transition: 350ms;
//   z-index: 100000;
//   .nav-link {
//     display: flex;
//     color: #e1e9fc;
//     align-items: center;
//     padding: 30px;
//     list-style: none;
//     height: 80px;
//     width: 60%;
//     text-decoration: none;
//     font-size: 1rem;
//     opacity: 0.3;
//     transition: 0.3s ease-in-out all;
//     &:hover {
//       opacity: 1;
//       padding-left: 2.4rem;
//       border-left: 4px solid var(--dark-purple);
//       cursor: pointer;
//       font-weight: bold;
//     }
//   }
//   .nav-link span {
//     margin-left: 0.6rem;
//   }
//   a.active {
//     opacity: 1;
//     /* border-left: 4px solid var(--dark-purple); */
//   }
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
//   .arrows {
//     color: var(--grey);
//   }
//   .image-social-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 1.5rem;
//   }
//   .social-links-wrapper ul {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .social-links-wrapper ul li {
//     list-style: none;
//     padding: 0.3rem;
//   }
//   .social-link {
//     border-radius: 50%;
//     background: #2e313c;
//     padding: 0.6rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: 0.5;
//     transition: 0.4s ease-in-out all;
//     &:hover {
//       opacity: 1;
//     }
//   }
// `;

// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   const handleNavClick = () => setSidebar(false);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <NavIcon to="#">
//               {sidebar ? (
//                 <IoIcons.IoIosArrowDropleftCircle
//                   onClick={showSidebar}
//                   className="arrows"
//                 />
//               ) : (
//                 <IoIcons.IoIosArrowDroprightCircle
//                   onClick={showSidebar}
//                   className="arrows"
//                 />
//               )}
//             </NavIcon>
//             <div className="image-social-wrapper">
//               <Avatar
//                 alt="Calvin Kim"
//                 src={profile}
//                 sx={{
//                   width: 150,
//                   height: 150,
//                   border: "4px solid #2e313c",
//                   marginBottom: ".8rem",
//                 }}
//               />
//               <Typography
//                 variant="overline"
//                 fontSize="1rem"
//                 fontWeight="bold"
//                 sx={{ color: "#fff" }}
//               >
//                 @Calvin Kim
//               </Typography>
//               <Typography
//                 variant="overline"
//                 fontSize=".7rem"
//                 sx={{ color: "#666a78" }}
//                 marginTop="-.4rem"
//                 marginBottom=".5rem"
//               >
//                 Software Developer
//               </Typography>
//               <div className="social-links-wrapper">
//                 <ul>
//                   <li>
//                     <a
//                       href="https://github.com/calvin-kim13"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="social-link"
//                     >
//                       <FiIcons.FiGithub />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/in/calvin-kim-143aa51a2/"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="social-link"
//                     >
//                       <FaIcons.FaLinkedinIn />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="../assets/resume.pdf"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="social-link"
//                     >
//                       <AiIcons.AiOutlineFile />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <NavLink to="/" className="nav-link" onClick={handleNavClick}>
//               <AiIcons.AiOutlineHome /> <span>Home</span>
//             </NavLink>
//             <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
//               <BsIcons.BsPerson /> <span>About</span>
//             </NavLink>
//             <NavLink
//               to="/projects"
//               className="nav-link"
//               onClick={handleNavClick}
//             >
//               <RiIcons.RiPagesLine /> <span>Projects</span>
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="nav-link"
//               onClick={handleNavClick}
//             >
//               <BiIcons.BiEnvelope /> <span>Contact</span>
//             </NavLink>
//           </SidebarWrap>
//         </SidebarNav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Sidebar;