// Defines four asynchronous functions

const API = {
  // From an internal API, GETS the last workout
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1]; // does this line parse out the most recent workout?
  },

  // From an internal API, PUTS (edits) the current exercise
  async addExercise(data) {
    // Parses the ID from the current URL
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

  // From an internal API, POSTS (creates) a new workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  // From an internal API, GETS workouts within the desired date range
  async getWorkoutsInRange() {
    // TODO: Write this route
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
