const ctx = document.getElementById("circleChart").getContext("2d");
const circleChart = new Chart(ctx, {
  type: "doughnut", // Change to 'pie' for a full pie chart
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "Dataset",
        data: [10, 10, 10, 10, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "40%", // Adjust to create a thicker or thinner doughnut
  },
});


// const ctx = document.getElementById('polarChart').getContext('2d');
// const polarChart = new Chart(ctx, {
//     type: 'polarArea', // Use 'polarArea' for the polar chart
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
//         datasets: [{
//             label: "Dataset",
//             data: [1, 6, 4, 2, 7],  // Set your data values
//             backgroundColor: [
//                 "rgba(255, 99, 132, 0.7)",
//                 "rgba(54, 162, 235, 0.7)",
//                 "rgba(255, 206, 86, 0.7)",
//                 "rgba(75, 192, 192, 0.7)",
//                 "rgba(153, 102, 255, 0.7)"
//             ],
//             borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(153, 102, 255, 1)"
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: false, // Make it non-responsive if you want fixed size
//         scale: {
//             ticks: {
//                 beginAtZero: true,  // Ensure the chart starts at zero
//                 max: 20,  // You can set the maximum value based on your data range
//                 stepSize: 2  // Control the step size for the ticks on the scale
//             }
//         }
//     }
// });
