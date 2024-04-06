function showToast(message, messageType) {
  const toastEl = document.createElement("div");
  toastEl.classList.add("toast", "align-items-center", "border-0");

  switch (messageType) {
    case "warning":
      toastEl.classList.add("bg-warning", "text-dark");
      break;
    case "info":
      toastEl.classList.add("bg-info", "text-white");
      break;
    case "success":
      toastEl.classList.add("bg-success", "text-white");
      break;
    case "danger":
      toastEl.classList.add("bg-danger", "text-white");
      break;
    default:
      toastEl.classList.add("bg-primary", "text-white");
  }

  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");
  const toastContent = `
          <div class="d-flex">
            <div class="toast-body">
              ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        `;
  toastEl.innerHTML = toastContent;
  const toastContainer = document.getElementById("toastContainer");
  toastContainer.appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
