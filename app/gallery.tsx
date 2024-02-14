"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import { FaRegCircleXmark } from "react-icons/fa6";

import Modal from "./modal";
import UserInfo from "./UserInfo";

import { User } from "./types/user";

export type GalleryProps = {
  users: User[];
};

const Gallery = ({ 
  users
}: GalleryProps) => {
  const [usersList, setUsersList] = useState(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (id: number) => {
    const user = usersList.find((item) => item.id === id) || null;

    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="user-gallery">
      <h1 className="heading"> Users </h1>
      <div className="items">
        {usersList.map((user, index) => (
          <div
            className="item user-card"
            key={index}
            onClick={() => handleModalOpen(user.id)}
          >
            <div className="body">
              <Avatar
                size={96}
                name={user.name}
                variant="marble"
                colors={[
                  "#92A1C6",
                  "#146A7C",
                  "#F0AB3D",
                  "#C271B4",
                  "#C20D90"
                ]}
              />
            </div>
            <div className="info">
              <div className="name"> {user.name} </div>
              <div className="company"> {user.company.name} </div>
            </div>
          </div>
        ))}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="user-panel">
            <div className="header">
              <div
                role="button"
                tabIndex={0}
                className="close"
                onClick={handleModalClose}
              >
                <FaRegCircleXmark size={32} className="icon" />
              </div>
            </div>
            <div className="body">
              {selectedUser && (
                <UserInfo user={selectedUser} />
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
