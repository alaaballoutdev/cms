import { ModalProps } from "antd";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";
import { UserEntryType } from "./UsersTable";
const Modal = dynamic(() => import("antd/es/modal/Modal"));

interface DeleteModalProps extends ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  selectedUser: string | null;
  setSelectedUser: Dispatch<SetStateAction<string | null>>;
  setUsers: Dispatch<SetStateAction<UserEntryType[]>>;
  userItems: UserEntryType[];
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
    const res = await fetch("http://localhost:3000/api/user/delete", {
      method: "POST",
      body: JSON.stringify({ id: selectedUser }),
    });
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
