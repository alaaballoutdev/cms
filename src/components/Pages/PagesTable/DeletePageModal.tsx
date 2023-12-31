import { ModalProps, Modal } from "antd";
import { pageItems } from "lib/recoil-atoms";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
interface DeleteModalProps extends ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  selectedPage: string | null;
  setSelectedPage: Dispatch<SetStateAction<string | null>>;
}

const DeletePageModal = ({
  setOpenModal,
  setLoading,
  selectedPage,
  setSelectedPage,
  ...props
}: DeleteModalProps) => {
  const [pages, setPages] = useRecoilState(pageItems);
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleOK = async () => {
    setLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/pages/delete?id=${selectedPage}`,
      {
        method: "DELETE",
      }
    );

    setLoading(false);
    if (res.status == 200) {
      setOpenModal(false);
      setPages(pages.filter((page) => page.key !== selectedPage));
    } else {
      console.log("Something went wrong");
    }
  };

  return <Modal {...props} onOk={handleOK} onCancel={handleCancel} />;
};

export default DeletePageModal;
