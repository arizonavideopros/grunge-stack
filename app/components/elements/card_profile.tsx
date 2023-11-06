// src/components/CardProfile.tsx

import * as React from "react";

interface CardProfileProps {
  avatarSrc: string;
  name: string;
  position: string;
  bio: string;
}

const CardProfile: React.FC<CardProfileProps> = ({ avatarSrc, name, position, bio }) => (
  <div className="rounded-lg shadow-md overflow-hidden p-4 text-center">
    <img src={avatarSrc} alt={name} className="mx-auto w-24 h-24 rounded-full mb-2" />
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <h4 className="text-md text-gray-500 mb-3">{position}</h4>
    <p>{bio}</p>
  </div>
);

export default CardProfile;
