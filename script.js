// ========== CART COUNT DISPLAY ==========

// Get cart count from localStorage or default to 0
let cartCount = localStorage.getItem("cartCount") || 0;

// Update cart count display on all pages
const cartCountSpan = document.getElementById("cart-count");
if (cartCountSpan) {
  cartCountSpan.textContent = cartCount;
}

// ========== ADD TO CART BUTTON (shop.html) ==========

const addToCartBtn = document.querySelector(".add-to-cart");
const confirmationMsg = document.getElementById("confirmation-msg");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    if (cartCountSpan) cartCountSpan.textContent = cartCount;

    if (confirmationMsg) {
      confirmationMsg.classList.remove("hidden");
      setTimeout(() => {
        confirmationMsg.classList.add("hidden");
      }, 2000);
    }
  });
}

// ========== CONTACT FORM SUBMIT (contact.html) ==========

const form = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formSuccess) {
      formSuccess.classList.remove("hidden");
    }

    form.reset();

    setTimeout(() => {
      if (formSuccess) {
        formSuccess.classList.add("hidden");
      }
    }, 3000);
  });
}

// ========== CART PAGE LOGIC (cart.html) ==========

const cartStatus = document.getElementById("cart-status");
const clearCartBtn = document.getElementById("clear-cart");

if (cartStatus && clearCartBtn) {
  if (cartCount > 0) {
    cartStatus.innerHTML = `🛍️ You have <strong>${cartCount}</strong> item(s) in your cart.`;
    clearCartBtn.classList.remove("hidden");
  } else {
    cartStatus.innerText = "🛒 Your cart is empty.";
  }

  clearCartBtn.addEventListener("click", () => {
    localStorage.setItem("cartCount", 0);
    location.reload();
  });
}
