import { ModalProps, Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UserEntry } from "./UsersTable";

interface DeleteModalProps extends ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  selectedUser: string | null;
  setSelectedUser: Dispatch<SetStateAction<string | null>>;
  setUsers: Dispatch<SetStateAction<UserEntry[]>>;
  userItems: UserEntry[];
  children: React.ReactNode;
}

const DeleteUserModal = ({
  setOpenModal,
  setLoading,
  selectedUser,
  setSelectedUser,
  setUsers,
  userItems,
  children,
  ...props
}: DeleteModalProps) => {
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleOK = async () => {
    setLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/user/delete?id=${selectedUser}`,
      {
        method: "DELETE",
      }
    );
    setLoading(false);
    if (res.status == 200) {
      setOpenModal(false);
      setUsers(userItems.filter((user) => user.key !== selectedUser));
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <Modal {...props} onOk={handleOK} onCancel={handleCancel}>
      {children}
    </Modal>
  );
};

export default DeleteUserModal;
