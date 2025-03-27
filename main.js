

function ask() {
    Swal.fire({
        title: "Do you want Contract, Right?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "IG",
        denyButtonText: `FaceBook`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Instragram!", "UID : src_mxr", "success");
        } else if (result.isDenied) {
          Swal.fire("FaceBook!", "i can't show now!?!", "info");
        }
      });
}
