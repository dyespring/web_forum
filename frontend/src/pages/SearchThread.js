// import React, { useEffect, useState } from "react";
// import styled from 'styled-components';

// const SearchContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
// `;


// function SearchComponent({onSearch }) {

//   const [data, setData] = useState([]);
  
//   const handleSearch = () => {
//     onSearch(data)};
  
//     const fetchData = () => {

//     return fetch("http://127.0.0.1:8000/api/list_post")

//       .then((res) => res.json())

//       .then((d) => setData(d));

//   };

//   useEffect(() => {

//     fetchData();

//   }, []);

//   const [query, setQuery] = useState("");

//   const search_parameters = Object.keys(Object.assign({}, ...data));

//   function search(data) {

//     return data.filter((data) =>

//       search_parameters.some((parameter) =>

//         data[parameter].toString().toLowerCase().includes(query)

//       )

//     );

//   }

//   return (

//     <div className="container">

//       <center>

//         <h1>Search Threads Results in Webforum</h1>

//       </center>

//       <div className="input-box">

//         <input

//           type="search"

//           name="search-form"

//           id="search-form"

//           className="search-input"

//           onChange={(e) => setQuery(e.target.value)}

//           placeholder="Search Thread"
          
//           />
//         </div>
//         <SearchContainer className="box-container" style={{ textAlign: 'left' }}>

//         {search(data).map((dataObj) => {

//           return (

//             <div className="box">

//               <div class="card">

//                 <div class="title">
//                 <a href={`http://127.0.0.1:8000/api/list_post/${dataObj.id}`}>{dataObj.title}</a>
//                 </div>

//                 {/* <div class="heading">

//                   {dataObj.title}

//                   <div class="author">{dataObj.title}</div> */}

//                 {/* </div> */}

//               </div>

//             </div>

//           );

//         })}

//     </SearchContainer>

//     </div>

//   );

// }

// export default SearchComponent;


import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgrey;
  padding: 20px;
  z-index: 1000;
`;

function SearchComponent({ onSearch }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/list_post")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    onSearch(data);
  };

  const search = (data) => {
    const searchParameters = Object.keys(Object.assign({}, ...data));
    return data.filter((item) =>
      searchParameters.some((param) =>
        item[param].toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <SearchContainer>
      <h1 style={{ textAlign: 'center' }}>Search Threads Results in Webforum</h1>
      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Thread"
        />
        {/* <button onClick={handleSearch}></button> */}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="box-container">
          {search(data).map((dataObj) => (
            <div className="box" key={dataObj.id}>
              <div className="card">
                <div className="title">
                  <button onClick={() => openModal(dataObj)}>{dataObj.title}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedPost && (
        <ModalContainer>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={closeModal}>Close</button>
        </ModalContainer>
      )}
    </SearchContainer>
  );
}

export default SearchComponent;