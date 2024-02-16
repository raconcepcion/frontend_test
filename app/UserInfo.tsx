import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import Avatar from "boring-avatars";

import { User } from "./types/user";

interface UserInfoProps {
  user: User
}

const UserInfo = ({
  user
}: UserInfoProps) => (
  <div className="user-info info">
    <div className="avatar">
      <Avatar
        size={240}
        name={user.name}
        variant="marble"
        colors={[
          "#92A1C6",
          "#146A7C",
          "#F0AB3D",
          "#C271B4",
          "#C20D90",
        ]}
      />
    </div>
    <div className="name">
      {user.name} ({user.username})
    </div>
    <div className="field">
      <FaLocationDot className="icon" />
      <div className="value">
        {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
      </div>
    </div>
    <div className="field">
      <FaPhone className="icon" />
      <div className="value">
        {user.phone}
      </div>
    </div>
    <div className="field">
      <FaEnvelope className="icon" />
      <div className="value">
        {user.email}
      </div>
    </div>
    <div className="company">
      <div className="name">
        {user.company.name}
      </div>
      <div className="catchphrase">
        {user.company.catchPhrase}
      </div>
    </div>
  </div>
)

export default UserInfo;
