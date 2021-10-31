import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//PUT  to add likes
// map looping thru content of gallery
// const[name, setName]= useState( null );

function GalleryList({ onGetGallery, galleryList, likeButton }) {
  return (
    <>
      <h1>My Gallery</h1>

      {galleryList.map((image) => {
        return (
          <GalleryItem
            galleryList={galleryList}
            onGetGallery={onGetGallery}
            likeButton={likeButton}
            image={image}
          />
        );
      })}
    </>
  );
}

export default GalleryList;
