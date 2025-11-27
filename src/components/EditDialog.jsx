const EditDialog = ({item, modifyMedia, onClose}) => {
  return (
    <>
      <dialog open>
        <h1>Edit media formit</h1>
        {/*TODO: tee form, jossa voi editoita title ja description
        ja korjaa että close toimii*/}
        <button onClick={onClose}>Close</button>
      </dialog>

    </>
  );
};

export default EditDialog;
