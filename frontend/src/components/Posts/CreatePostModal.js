import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import CreatePostForm from "./CreatePostForm";
import { useSelector } from "react-redux";
import "./CreatePostModal.css"
// import { setCurrentModal } from "../../store/modal";



function CreatePostModal() {
  const [showPostModal, setShowPostModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (showPostModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showPostModal]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <button
        className="create-post-button"
        onClick={() => setShowPostModal(true)}
      >
        Add Post
      </button>
      // <i
      //   className="far fa-plus-square create-post-button"
      //   onClick={() => setShowPostModal(true)}
      // ></i>
    );
  }

  return (
    <div className="create-post-container">
      <div>{sessionLinks}</div>
      {showPostModal && (
        <Modal onClose={() => setShowPostModal(false)}>
          <CreatePostForm setShowPostModal={setShowPostModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreatePostModal;
