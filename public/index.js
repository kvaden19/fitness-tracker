init();

// When the landing page launches, if there is NOT a last workout, hide the "Continue Workout" button.
// Otherwise include the last workout's ID in the URL.
async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

