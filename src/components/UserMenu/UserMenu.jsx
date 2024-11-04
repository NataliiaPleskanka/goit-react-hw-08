import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operation";
import toast from "react-hot-toast";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast(`See you soon, ${user.name}!`);
      });
  };

  return (
    <div className={css.userLogout}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  );
};
export default UserMenu;