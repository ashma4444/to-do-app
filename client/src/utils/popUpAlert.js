import Swal from "sweetalert2";

async function PopupAlert({
  title,
  text,
  icon,
  confirmButtonText,
  successTitle,
  successMsg,
  successIcon,
}) {
  const result = await Swal.fire({
    title: title || "Are you sure?",
    text: text || "You won't be able to revert this!",
    icon: icon || "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, delete it!",
  });
  if (!result.isConfirmed) return false;

  Swal.fire(
    successTitle || "Deleted!",
    successMsg || "File had been deleted",
    successIcon || "success"
  );
  return true;
}

export default PopupAlert;
