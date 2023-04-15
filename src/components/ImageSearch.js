import React,{useState} from "react";

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onsubmit =(e)=>{
         e.preventDefault();

         searchText(text);
    }

  return (
    <>
      <nav className="navbar  bg-primary fixed-top">
        <div className="container-fluid">
          <form  onSubmit={onsubmit} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=> setText(e.target.value)}
            />
            <button className="btn  btn-dark" type="submit" >
              Search
            </button>
          </form>
        </div>
      </nav>
      <br/><br/><br/>
    </>
  );
};

export default ImageSearch;
