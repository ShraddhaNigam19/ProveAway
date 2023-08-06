// // Function to show the "choose" group for the selected container-box
// function showChooseGroup(containerBox) {
//   const chooseGroup = containerBox.querySelector(".choose");
//   chooseGroup.classList.add("show");
// }

// // Function to hide all "choose" groups
// function hideAllChooseGroups() {
//   const chooseGroups = document.querySelectorAll(".choose");
//   chooseGroups.forEach((chooseGroup) => {
//     chooseGroup.classList.remove("show");
//   });
// }

// // Function to handle click on container-boxes and update the radio buttons
// function handleContainerBoxClick(containerBox) {
//   const radio = containerBox.querySelector('input[type="radio"]');
//   if (radio) {
//     radio.checked = true;
//     hideAllChooseGroups();
//     showChooseGroup(containerBox);
//   }
// }

// // Add event listener to the main container to handle clicks on container-boxes and radio buttons
// const mainContainer = document.querySelector(".main-container");
// if (mainContainer) {
//   mainContainer.addEventListener("click", (event) => {
//     const target = event.target;
//     const containerBox = target.closest(
//       ".container-box1, .container-box2, .container-box3"
//     );
//     if (containerBox) {
//       handleContainerBoxClick(containerBox);
//     }
//   });
// }

// // Add event listener to the radio buttons to show "choose" group
// const radioButtons = document.querySelectorAll(".radio-1, .radio-2, .radio-3");
// radioButtons.forEach((radio) => {
//   radio.addEventListener("click", (event) => {
//     const containerBox = event.target.closest(
//       ".container-box1, .container-box2, .container-box3"
//     );
//     if (containerBox) {
//       hideAllChooseGroups();
//       showChooseGroup(containerBox);
//     }
//   });
// });

// // Initially hide all "choose" groups
// hideAllChooseGroups();
