function setSelectedValue(value) {
  document.getElementById("dropdownMenuButton").innerText = value;
}

const loginUser = (username) => {
    document.getElementById(
      "usernameSection"
    ).innerHTML = `<div class="d-flex align-items-center">
                            <img src="./images/sarthak.png" alt="sarthak" srcset="" />
                            <p class="name my-auto mx-2">${username}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1_822)">
                        <path d="M7 10L12 15L17 10H7Z" fill="#2E2E2E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_822">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                        </div>`;
    document.getElementById("recommended").classList.remove("d-none");
    document.getElementById("recommended").classList.add("d-flex")
}

// loginUser("Siddharth Goyal")