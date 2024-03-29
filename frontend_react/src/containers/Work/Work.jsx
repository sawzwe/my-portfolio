import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [showMore, setShowMore] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  // console.log(works[0]._id);
  const toggleShowMore = (id) => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
    setShowMore(!showMore);
  };
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My<span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "Data Science", "Other", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 0.8] }}
                    whileHover={{ scale: [0.8, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                    title="View Website"
                  >
                    <HiOutlineRocketLaunch />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 0.8] }}
                    whileHover={{ scale: [0.8, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                    title="View Source Code"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div> */}

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              {/* <p
                className={`p-text app__work-description ${
                  showMore ? "app__work-description--expanded" : ""
                }`}
                style={{ marginTop: 10 }}
              >
                {work.description}
              </p> */}
              <p
                className={`p-text app__work-description ${
                  "app__work-description--expanded"
                }`}
                style={{ marginTop: 10 }}
              >
                {work.description}
              </p>
              {/* {work.description.length > 100 && (
                <button onClick={() => setShowMore(!showMore)}>
                  {showMore ? "See less" : "See more"}
                </button>
              )} */}
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);

// import React, { useState, useEffect } from "react";
// import { AiFillGithub } from "react-icons/ai";
// import { HiOutlineRocketLaunch } from "react-icons/hi2";

// import { motion } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
// import "./Work.scss";

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   const [filterWork, setFilterWork] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("All");

//   useEffect(() => {
//     const query = '*[_type == "works"]';

//     client.fetch(query).then((data) => {
//       setWorks(data);
//       setFilterWork(data);
//     });
//   }, []);

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);

//     if (item === "All") {
//       setFilterWork(works);
//     } else {
//       setFilterWork(works.filter((work) => work.tags.includes(item)));
//     }
//   };

//   const [showMore, setShowMore] = useState({});

//   const toggleShowMore = (id) => {
//     setShowMore((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   return (
//     <>
//       <h2 className="head-text">
//         My<span>Portfolio</span>
//       </h2>

//       <div className="app__work-filter">
//         {["UI/UX", "Web App", "Mobile App", "Data Science", "Other", "All"].map(
//           (item, index) => (
//             <div
//               key={index}
//               onClick={() => handleWorkFilter(item)}
//               className={`app__work-filter-item app__flex p-text ${
//                 activeFilter === item ? "item-active" : ""
//               }`}
//             >
//               {item}
//             </div>
//           )
//         )}
//       </div>

//       <motion.div
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div className="app__work-img app__flex">
//               <img src={urlFor(work.imgUrl)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{
//                   duration: 0.25,
//                   ease: "easeInOut",
//                   staggerChildren: 0.5,
//                 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 0.8] }}
//                     whileHover={{ scale: [0.8, 1] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                     title="View Website"
//                   >
//                     <HiOutlineRocketLaunch />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 0.8] }}
//                     whileHover={{ scale: [0.8, 1] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                     title="View Source Code"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p className={`p-text app__work-description ${showMore[index] ? "app__work-description--expanded" : ""}`} style={{ marginTop: 10 }}>
//                 {work.description}
//               </p>
//               {work.description.length > 100 && (
//                 <button onClick={() => toggleShowMore(index)}>
//                   {showMore[index] ? "See less" : "See more"}
//                 </button>
//               )}
//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Work, "app__works"),
//   "work",
//   "app__primarybg"
// );

// import React, { useState, useEffect } from "react";
// import { AiFillGithub } from "react-icons/ai";
// import { HiOutlineRocketLaunch } from "react-icons/hi2";
// import { motion } from "framer-motion";
// import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
// import "./Work.scss";

// const Work = () => {
//   const [works, setWorks] = useState([]);
//   const [filterWork, setFilterWork] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
//   const [showMore, setShowMore] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "works"]';

//     client.fetch(query).then((data) => {
//       setWorks(data);
//       setFilterWork(data);
//       setShowMore(data.map(() => false)); // Initialize showMore state for each work item
//     });
//   }, []);

//   const toggleShowMore = (index) => {
//     setShowMore((prevShowMore) => {
//       const newShowMore = [...prevShowMore];
//       newShowMore[index] = !newShowMore[index];
//       return newShowMore;
//     });
//   };

//   const handleWorkFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === "All") {
//         setFilterWork(works);
//       } else {
//         setFilterWork(works.filter((work) => work.tags.includes(item)));
//       }
//     }, 500);
//   };

//   return (
//     <>
//       <h2 className="head-text">
//         My<span>Portfolio</span>
//       </h2>

//       <div className="app__work-filter">
//         {["UI/UX", "Web App", "Mobile App", "Data Science", "Other", "All"].map(
//           (item, index) => (
//             <div
//               key={index}
//               onClick={() => handleWorkFilter(item)}
//               className={`app__work-filter-item app__flex p-text ${
//                 activeFilter === item ? "item-active" : ""
//               }`}
//             >
//               {item}
//             </div>
//           )
//         )}
//       </div>

//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className="app__work-portfolio"
//       >
//         {filterWork.map((work, index) => (
//           <div className="app__work-item app__flex" key={index}>
//             <div className="app__work-img app__flex">
//               <img src={urlFor(work.imgUrl)} alt={work.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{
//                   duration: 0.25,
//                   ease: "easeInOut",
//                   staggerChildren: 0.5,
//                 }}
//                 className="app__work-hover app__flex"
//               >
//                 <a href={work.projectLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 0.8] }}
//                     whileHover={{ scale: [0.8, 1] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                     title="View Website"
//                   >
//                     <HiOutlineRocketLaunch />
//                   </motion.div>
//                 </a>
//                 <a href={work.codeLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                     whileInView={{ scale: [0, 0.8] }}
//                     whileHover={{ scale: [0.8, 1] }}
//                     transition={{ duration: 0.25 }}
//                     className="app__flex"
//                     title="View Source Code"
//                   >
//                     <AiFillGithub />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className="app__work-content app__flex">
//               <h4 className="bold-text">{work.title}</h4>
//               <p
//                 className={`p-text app__work-description ${
//                   showMore[index] ? "app__work-description--expanded" : ""
//                 }`}
//                 style={{ marginTop: 10 }}
//               >
//                 {work.description}
//               </p>
//               {work.description.length > 100 && (
//                 <button onClick={() => toggleShowMore(index)}>
//                   {showMore[index] ? "See less" : "See more"}
//                 </button>
//               )}
//               <div className="app__work-tag app__flex">
//                 <p className="p-text">{work.tags[0]}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Work, "app__works"),
//   "work",
//   "app__primarybg"
// );
